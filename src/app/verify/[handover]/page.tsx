"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { DiscordDisplay } from "@/app/_components/profileDisplay/discord";
import { Skeleton } from "@/app/_components/skeleton/skeleton";
import { Card } from "@/app/_components/card/card";
import Link from "next/link";
import { Button } from "@/app/_components/button/button";
import { IdCard, LinkIcon, MailIcon, UsersIcon } from "lucide-react";
import { ChooserContainer, ChooserOption } from "@/app/_components/chooser";
import { useGuild } from "../libs/useGuild";
import { Guilds, GuildSettings } from "@prisma/client";
// import { Skeleton } from "@chakra-ui/skeleton";

const HandoverPage = () => {
  const params = useParams<{ handover: string }>();
  const handoverId = params.handover;
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const router = useRouter();
  const guildId = useGuild();
  const [guild, setGuild] = useState<Partial<
    Guilds & { settings: GuildSettings[] }
  > | null>(null);

  useEffect(() => {
    (async () => {
      const reqHandover = await fetch("/api/getHandover", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          handover: handoverId,
        }),
      });

      if (!reqHandover.ok) {
        return;
      }

      const data = (await reqHandover.json()) as {
        DiscordUser: {
          discordId: string;
          username: string;
          avatar: string;
        };
        isVerified: boolean;
      };

      if (!data.isVerified) {
        return router.push(`/verify/${handoverId}/authwall`);
      }

      setUsername(data.DiscordUser.username);
      setAvatar(data.DiscordUser.avatar);
      setId(data.DiscordUser.discordId);
      setLoading(false);
    })();
  }, [handoverId, router]);

  useEffect(() => {
    if (!guildId) return;
    console.log(guildId);
    fetch(`/api/dashboard/${guildId}`).then((res) => {
      if (!res.ok) {
        return;
      }

      res.json().then((data) => {
        setGuild(data);
      });
    });
  }, [guildId]);

  return (
    <Card>
      {!loading && guild && (
        <>
          <h2>
            Get access to {guild.guildName}, {username}
          </h2>
          <p>
            Link your Discord profile to your university ID to verify and gain
            access to social features in {guild.guildName} and servers that
            require it.
          </p>
          <DiscordDisplay
            username={username}
            avatarUrl={avatar}
            verified={false}
          />
          <p>
            If you verify here, you will also be automatically verified in other
            servers that participate in the uowbo! scheme.
          </p>

          <p>Choose how you want to verify</p>

          {guild.settings && (
            <>
              {guild.settings.length != 0 && (
                <ChooserContainer>
                  {!guild.settings[0].allowsBiometricEntry &&
                    !guild.settings[0].allowsEmailEntry && (
                      <div
                        style={{
                          padding: 16,
                        }}
                      >
                        <p>
                          {guild.guildName} is not accepting new members at the
                          moment.
                        </p>
                      </div>
                    )}
                  {guild.settings[0].allowsEmailEntry && (
                    <ChooserOption
                      label="Use your university email address"
                      image={<MailIcon size={16} />}
                      href={`/verify/${handoverId}/mail`}
                    />
                  )}

                  {guild.settings[0].allowsBiometricEntry && (
                    <ChooserOption
                      label="Scan your university card"
                      image={<IdCard size={16} />}
                      href={`/verify/${handoverId}/card`}
                    />
                  )}

                  {guild.settings[0].allowsExternalEntry && (
                    <ChooserOption
                      label="Claim external status"
                      image={<UsersIcon size={16} />}
                      href={`/verify/${handoverId}/external`}
                    />
                  )}
                </ChooserContainer>
              )}
            </>
          )}

          <p>
            {/* TO DO */}
            By linking, you agree to follow and also agree to how uowbo!{" "}
            <Link href={"/privacy"}>processes your data</Link>.
          </p>
        </>
      )}

      {loading && (
        <>
          <Skeleton width={"40%"} height={16}></Skeleton>
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Skeleton width={"100%"} height={16} count={2}></Skeleton>
          </div>
          <DiscordDisplay
            username={username}
            avatarUrl={avatar}
            verified={false}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <Skeleton width={"100%"} height={16} count={2}></Skeleton>
            <Skeleton width={"60%"} height={16} count={1}></Skeleton>
          </div>
        </>
      )}
    </Card>
  );
};

export default HandoverPage;
