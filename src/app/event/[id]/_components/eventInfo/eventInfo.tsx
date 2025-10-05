"use client";
import { Event, Prisma } from "@prisma/client";
import styles from "../../event.module.css";
import { TimeInfoBox } from "../infoBox/time";
import { MembersInfoBox } from "../infoBox/members";
import { db } from "@/libs/db";
import { joinClasses } from "@/libs/joinClasses";
import { useMe } from "../../libs/useMe";
import { useToken } from "@/app/dashboard/libs/useToken";
import { useEffect } from "react";
import { DescriptionInfoBox } from "../infoBox/description";
import { GuestLimitInfoBox } from "../infoBox/guestLimit";
import { LocationInfoBox } from "../infoBox/location";

const eventWithDetailsArgs = Prisma.validator<Prisma.EventFindUniqueArgs>()({
  where: {
    id: "eventId",
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

type EventWithDetails = Prisma.EventGetPayload<typeof eventWithDetailsArgs>;

export const EventInfo = ({ event }: { event: EventWithDetails }) => {
  const token = useToken();
  const me = useMe(token);

  const isEditable =
    token &&
    me.data &&
    me.data.guilds
      .filter((t) => t.guildsId == event.guildsId)
      .filter((t) => t.isMod || t.isOwner).length == 1;

  const saveSetting = (settings: Partial<Event>) => {
    // Check if there are any actual changes
    const hasChanges = Object.keys(settings).some((key) => {
      const eventKey = key as keyof Event;
      return event[eventKey] !== settings[eventKey];
    });

    if (!hasChanges) {
      return; // No changes, don't make API call or reload
    }

    fetch(`/api/event/${event.id}`, {
      method: "PATCH",
      body: JSON.stringify(settings),
      headers: {
        authorization: token as string,
      },
    }).then((res) => {
      if (!res.ok) return;

      if (window) {
        window.location.reload();
      }
    });
  };

  return (
    <div className={styles.eventInfoBoxes}>
      {event.description && (
        <DescriptionInfoBox
          isEditable={isEditable}
          updateSetting={saveSetting}
          description={event.description}
        />
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

      {(event.guestLimit > 0 || isEditable) && (
        <GuestLimitInfoBox
          isEditable={isEditable}
          updateSetting={saveSetting}
          guestLimit={event.guestLimit}
        />
      )}

      {(event.location || isEditable) && (
        <LocationInfoBox
          location={event.location || " "}
          isEditable={isEditable}
          updateSetting={saveSetting}
        />
      )}
    </div>
  );
};
