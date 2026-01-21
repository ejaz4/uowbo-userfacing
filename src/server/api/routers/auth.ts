import { env } from "~/env";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import crypto from "node:crypto";

export const authRouter = createTRPCRouter({
  requestDiscordAuthentication: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      // Look up username in database
      const userDiscord = await ctx.db.discordAccountLink.findUnique({
        where: {
          username: input,
        },
      });

      if (!userDiscord) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message:
            "Sorry, it looks like your credentials could not be located.",
        });
      }

      const rawToken = crypto.randomBytes(48).toString("hex");
      const code = [
        "NG",
        String(crypto.randomInt(0, 100_000_000)).padStart(8, "0"),
      ].join("-");

      const { escalationSecret, ...session } =
        await ctx.db.discordSession.create({
          data: {
            token: rawToken,
            escalationSecret: code,
            discordAccountLink: {
              connect: {
                username: input,
              },
            },
          },
        });

      const botMsgReq = await fetch(`${env.BOT_URL}/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userDiscord.id,
          code,
        }),
      }).catch((err) => {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Sorry, that didn't work.`,
        });
      });

      if (!botMsgReq.ok) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Sorry, you can't log in this way.`,
        });
      }

      return session;
    }),
});
