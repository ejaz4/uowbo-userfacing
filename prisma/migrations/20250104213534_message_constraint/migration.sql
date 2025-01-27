/*
  Warnings:

  - A unique constraint covering the columns `[guildsId,discordUserId]` on the table `GuildUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "GuildMessage" (
    "id" TEXT NOT NULL,
    "message" TEXT,
    "parentMessageId" TEXT,
    "guildUserId" TEXT,

    CONSTRAINT "GuildMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GuildUser_guildsId_discordUserId_key" ON "GuildUser"("guildsId", "discordUserId");

-- AddForeignKey
ALTER TABLE "GuildMessage" ADD CONSTRAINT "GuildMessage_parentMessageId_fkey" FOREIGN KEY ("parentMessageId") REFERENCES "GuildMessage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildMessage" ADD CONSTRAINT "GuildMessage_guildUserId_fkey" FOREIGN KEY ("guildUserId") REFERENCES "GuildUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
