import { MemberInGuild } from "@/app/dashboard/libs/useMember";
import styles from "./memberList.module.css";
import popup from "../../../popups.module.css";
import { useEffect, useState } from "react";
import { useToken } from "@/app/dashboard/libs/useToken";
import { GavelIcon, HeartIcon, SmileIcon } from "lucide-react";
import {
  AuthorityHit,
  Federated,
  GuildSettings,
  HitType,
} from "@prisma/client";
import { useGuild, useGuildSettings } from "@/app/dashboard/libs/useGuild";

export const ModerateList = ({
  member,
  guildId,
}: {
  member: MemberInGuild;
  guildId: string;
}) => {
  const [settings, loaded, setNewSettings] = useGuildSettings(guildId);
  const [striking, setStriking] = useState(false);
  const [federating, setFederating] = useState(false);

  useEffect(() => {
    if (loaded == false) return;
    if (settings == null) return;

    setFederating((settings as GuildSettings).usesUowboNet);
  }, [loaded, settings]);

  return (
    <div className={styles.card}>
      <div>
        <h2>Moderation</h2>
      </div>
      <div>
        <button onClick={() => setStriking(true)}>
          <GavelIcon size={16} /> <p>Strike</p>
        </button>
      </div>

      {member.link[0].authorityHits.length > 0 && (
        <div className={styles.messageList}>
          <>
            {member.link[0].authorityHits
              .filter((e) => {
                if (e.Guilds.guildId == guildId) {
                  return true;
                }

                if (federating) {
                  if (e.federated == Federated.ACCEPTED) {
                    return true;
                  }
                } else {
                  return false;
                }
              })
              .map((e, _) => (
                <Hit
                  federating={federating}
                  member={member}
                  guildId={guildId}
                  hit={e}
                  key={_}
                />
              ))}
          </>
        </div>
      )}

      {striking && (
        <ConfirmStrike
          guildId={guildId}
          setStrike={setStriking}
          federating={federating}
          member={member}
        />
      )}
    </div>
  );
};

const Hit = ({
  hit,
  member,
  guildId,
  federating,
}: {
  hit: {
    id: string;
    createdAt: string;
    type: HitType;
    federated: Federated;
    reason: string;
    Guilds: {
      guildId: string;
    };
  };
  member: MemberInGuild;
  guildId: string;
  federating: boolean;
}) => {
  const date = new Date(hit.createdAt);
  const guild = useGuild(hit.Guilds.guildId);
  const [pardoning, setPardoning] = useState(false);

  return (
    <div className={styles.hit}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 8,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {hit.type == HitType.STRIKE ? (
            <GavelIcon color="red" size={16} />
          ) : (
            <HeartIcon color="rgba(31,150,219,1)" size={16} />
          )}
        </div>
        <div className={styles.hitInfo}>
          <p className={styles.hitCreds}>
            {hit.type == HitType.STRIKE ? "Strike" : "Pardon"} from{" "}
            {guild?.guildName}
          </p>
          <p>
            {date.toLocaleString()} - {hit.reason}
          </p>
          <p className={styles.hitCreds}>
            uowbo!net status:{" "}
            {hit.federated == Federated.NOT_FEDERATED
              ? "Not submitted"
              : hit.federated == Federated.SUBMITTED
              ? "Submitted"
              : hit.federated == Federated.REJECTED
              ? "Rejected"
              : "Federated"}
          </p>
        </div>
      </div>

      {guildId == guild?.guildId && hit.type == HitType.STRIKE && (
        <div>
          <button onClick={() => setPardoning(true)}>
            <SmileIcon size={16} />
            <p>Pardon</p>
          </button>
        </div>
      )}

      {pardoning && (
        <ConfirmStrike
          pardon={true}
          setStrike={setPardoning}
          member={member}
          guildId={guildId}
          federating={federating}
          federate={hit.federated == Federated.ACCEPTED}
        />
      )}
    </div>
  );
};

const ConfirmStrike = ({
  setStrike,
  member,
  guildId,
  pardon = false,
  federate = true,
  federating = false,
}: {
  setStrike: (strike: boolean) => void;
  member: MemberInGuild;
  guildId: string;
  pardon?: boolean;
  federate?: boolean;
  federating?: boolean;
}) => {
  const [reason, setReason] = useState("");
  const [submitToUow, setSubmitToUow] = useState(federate);
  const [failReason, setFailReason] = useState("");
  const [notifyMember, setNotifyMember] = useState(true);
  const token = useToken();

  const submit = async () => {
    if (reason.length == 0) {
      return setFailReason("Please enter a reason");
    }

    await fetch(
      `/api/dashboard/${guildId}/members/${member.discordId}/strike`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token as string,
        },
        body: JSON.stringify({
          reason,
          federate: submitToUow,
          type: pardon ? HitType.PARDON : HitType.STRIKE,
          notify: notifyMember,
        }),
      }
    );

    setStrike(false);
  };

  useEffect(() => {
    if (pardon) return;

    setSubmitToUow(federating);
  }, [federating]);

  if (pardon) {
    return (
      <div className={popup.container}>
        <div className={popup.card}>
          <h2>Pardoning {member.username}</h2>
          <p>
            Pardon a user when they agree to follow the rules or to recall a
            strike.
          </p>
          <select onChange={(e) => setReason(e.currentTarget.value)}>
            <option value="">Choose a reason</option>
            <option>Member now abiding by rules</option>
            <option>Striked mistakingly</option>
          </select>

          {federating && (
            <>
              {submitToUow == true && (
                <p>This pardon will be submitted and federated immediately.</p>
              )}

              {submitToUow != true && <p>This pardon won&apos;t federate.</p>}
            </>
          )}

          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              onChange={(e) => {
                setNotifyMember(e.target.checked);
              }}
              defaultChecked={notifyMember}
              type="checkbox"
              name="notifyMember"
              id="notifyMember"
            />
            <label htmlFor="notifyMember">Notify member</label>
          </div>

          {failReason && <p style={{ color: "red" }}>{failReason}</p>}
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
            <button onClick={() => setStrike(false)}>Cancel</button>
            <button onClick={() => submit()}>Pardon</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={popup.container}>
      <div className={popup.card}>
        <h2>Striking {member.username}</h2>
        <p>Strike a user when they don&apos;t follow your rules.</p>
        <textarea
          onChange={(e) => {
            setReason(e.target.value.trim());
          }}
          name="reason"
          placeholder="Strike reason (e.g cursing, spamming, etc.)"
        ></textarea>
        {federating && (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              onChange={(e) => {
                setSubmitToUow(e.target.checked);
              }}
              defaultChecked={submitToUow}
              type="checkbox"
              name="submitToUow"
              id="submitToUow"
            />
            <label htmlFor="submitToUow">Also federate strike</label>
          </div>
        )}

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            onChange={(e) => {
              setNotifyMember(e.target.checked);
            }}
            defaultChecked={notifyMember}
            type="checkbox"
            name="notifyMember"
            id="notifyMember"
          />
          <label htmlFor="notifyMember">Notify member</label>
        </div>

        {failReason && <p style={{ color: "red" }}>{failReason}</p>}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 4 }}>
          <button onClick={() => setStrike(false)}>Cancel</button>
          <button onClick={() => submit()}>Strike</button>
        </div>
      </div>
    </div>
  );
};
