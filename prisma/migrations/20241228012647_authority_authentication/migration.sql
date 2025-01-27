/*
  Warnings:

  - You are about to drop the `ModeratorLogs` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "HitType" AS ENUM ('STRIKE', 'PARDON');

-- AlterTable
ALTER TABLE "DiscordUser" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ModeratorLogs";

-- CreateTable
CREATE TABLE "Token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "discordId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "discordUserId" TEXT,

    CONSTRAINT "Token_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorityHit" (
    "id" TEXT NOT NULL,
    "discordUniversityId" TEXT,
    "guildsId" TEXT,
    "reason" TEXT NOT NULL,
    "type" "HitType" NOT NULL DEFAULT 'STRIKE',

    CONSTRAINT "AuthorityHit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "Token"("token");

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorityHit" ADD CONSTRAINT "AuthorityHit_discordUniversityId_fkey" FOREIGN KEY ("discordUniversityId") REFERENCES "DiscordUniversity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorityHit" ADD CONSTRAINT "AuthorityHit_guildsId_fkey" FOREIGN KEY ("guildsId") REFERENCES "Guilds"("id") ON DELETE SET NULL ON UPDATE CASCADE;
