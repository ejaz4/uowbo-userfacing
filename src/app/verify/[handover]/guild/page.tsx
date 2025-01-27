"use client";
import { Card } from "@/app/_components/card/card";
import { Guilds, GuildUser } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import chooserStyles from "@/app/dashboard/_components/chooseGuild/chooseGuild.module.css";
import { Skeleton } from "@/app/_components/skeleton/skeleton";

const GuildChooserPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [guilds, setGuilds] = useState<
    | [
        {
          name: string;
          id: string;
          icon: string;
        }
      ]
    | null
  >(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const setGuildId = (guildId: string) => {
    localStorage.setItem("guildId", guildId);
    router.push(`/verify/${handoverId}/`);
  };

  useEffect(() => {
    fetch("/api/getHandover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        handover: handoverId,
      }),
    }).then((res) => {
      if (!res.ok) {
        return;
      }

      res.json().then((data) => {
        setGuilds(
          data.DiscordUser.guilds.map(
            (guild: Partial<GuildUser & { Guilds: Guilds }>) => ({
              name: guild.Guilds!!.guildName,
              id: guild.Guilds!!.guildId,
              icon: guild.Guilds!!.guildIcon,
            })
          )
        );
      });
    });
  }, [handoverId]);

  useEffect(() => {
    console.log(guilds);
  }, [guilds]);

  return (
    <Card>
      <h2>Choose a server</h2>
      <p>To continue, choose a server to complete verification in.</p>

      <div className={chooserStyles.guilds}>
        {!guilds && (
          <>
            {[...Array(3)].map((v, _) => (
              <Guild
                key={_}
                name={""}
                id={""}
                icon={""}
                setGuildId={() => {}}
                skeleton
              />
            ))}
          </>
        )}
        {guilds && (
          <>
            {guilds.map((guild) => (
              <Guild
                key={guild.id}
                name={guild.name}
                id={guild.id}
                icon={guild.icon}
                setGuildId={setGuildId}
              />
            ))}
          </>
        )}
      </div>
    </Card>
  );
};

const Guild = ({
  name,
  id,
  icon,
  setGuildId,
  skeleton,
}: {
  name: string;
  id: string;
  icon: string;
  setGuildId: (guildId: string) => void;
  skeleton?: boolean;
}) => {
  if (skeleton) {
    return (
      <button
        className={`${chooserStyles.guild} ${chooserStyles.unselectable}`}
      >
        <Skeleton width={48} height={48} borderRadius={4} />
        <div className={chooserStyles.guildInfo}>
          <Skeleton width={100} height={16} borderRadius={4} />
          <Skeleton width={80} height={12} borderRadius={2} />
        </div>
      </button>
    );
  }

  return (
    <button onClick={() => setGuildId(id)} className={chooserStyles.guild}>
      {icon && <img src={icon} alt={name} />}
      {!icon && (
        <div className={chooserStyles.nameIcon}>
          <p>{name}</p>
        </div>
      )}
      <div className={chooserStyles.guildInfo}>
        <h2>{name}</h2>
      </div>
    </button>
  );
};

export default GuildChooserPage;
