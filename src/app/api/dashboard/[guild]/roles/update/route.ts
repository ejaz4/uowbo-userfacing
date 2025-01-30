import { db } from "@/libs/db";
import { updateModerators } from "@/libs/moderators";
import { NextRequest } from "next/server";

export const GET = async (
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      guild: string;
    }>;
  }
) => {
  const p = await params;

  const guild = p.guild;

  if (req.headers.get("x-secret") !== process.env.SECRET)
    return new Response("Forbidden", { status: 403 });

  const moderatorRoleId = (
    await db.guilds.findUnique({
      where: {
        guildId: guild,
      },
      select: {
        settings: {
          select: {
            moderatorRoleId: true,
          },
        },
      },
    })
  )?.settings[0].moderatorRoleId;

  if (!moderatorRoleId) {
    return new Response("No moderator role found", { status: 400 });
  }

  updateModerators(guild, moderatorRoleId);
  return new Response("Roles updated", { status: 200 });
};
