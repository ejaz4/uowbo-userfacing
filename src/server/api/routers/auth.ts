import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const authRouter = createTRPCRouter({
  attemptLogin: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      let studentId = input.toLowerCase();

      if (!studentId.includes("w")) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "You must be a student with a student ID that starts with 'w'.",
        });
      }

      studentId = studentId.replace("w", "");

      let isEmail = false;
      if (studentId.includes("@")) {
        if (
          !studentId.endsWith("@westminster.ac.uk") &&
          !studentId.endsWith("@my.westminster.ac.uk")
        ) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message:
              "You must be a student from University of Westminster to use this service.",
          });
        }

        studentId = studentId.split("@")[0]!;
        isEmail = true;
      }

      let university = await ctx.db.discordUniversity.findUnique({
        where: {
          studentId,
        },
      });

      if (!university) {
        university = await ctx.db.discordUniversity.create({
          data: {
            studentId,
          },
        });
      }
    }),
});
