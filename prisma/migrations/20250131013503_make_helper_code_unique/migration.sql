/*
  Warnings:

  - A unique constraint covering the columns `[helperCode]` on the table `DiscordUniversity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DiscordUniversity_helperCode_key" ON "DiscordUniversity"("helperCode");
