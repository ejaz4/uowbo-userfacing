import { db } from "@/libs/db";
import { notFound, useParams } from "next/navigation";
import styles from "./event.module.css";
import { GuildHeader } from "@/app/_components/guildHeader";
import moment from "moment";
import { TimeInfoBox } from "./_components/infoBox/time";
import { MembersInfoBox } from "./_components/infoBox/members";

const EventPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = params.id;

  const event = await db.event.findUnique({
    where: {
      id,
    },
    include: {
      guilds: {
        select: {
          guildIcon: true,
          guildName: true,
          guildId: true,
        },
      },

      members: {
        where: {
          role: {
            in: ["HOST", "ORGANISER"],
          },
        },
        select: {
          role: true,
          DiscordUser: {
            select: {
              username: true,
              avatar: true,
            },
          },
        },
      },
    },
  });

  if (!event) {
    return notFound();
  }

  if (!event.guilds) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <GuildHeader
        name={event.guilds.guildName}
        icon={event.guilds.guildIcon}
      />

      <div className={styles.eventMeta}>
        <h1>{event.name}</h1>
        {event.description && (
          <div className={styles.infoBox}>
            <span className="label">Description</span>
            {event.description.split("\n").map((item, _) => (
              <p key={_}>{item}</p>
            ))}
          </div>
        )}

        <TimeInfoBox startTime={event.startTime} endTime={event.endTime} />
        <MembersInfoBox
          members={event.members.map((member, _) => {
            return {
              username: member.DiscordUser?.username,
              avatar: member.DiscordUser?.avatar ?? undefined,
              role: member.role,
            };
          })}
        />
      </div>
    </div>
  );
};

export default EventPage;
