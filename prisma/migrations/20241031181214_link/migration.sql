/*
  Warnings:

  - You are about to drop the column `universityUserId` on the `DiscordUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "DiscordUser" DROP CONSTRAINT "DiscordUser_universityUserId_fkey";

-- AlterTable
ALTER TABLE "DiscordUser" DROP COLUMN "universityUserId";

-- CreateTable
CREATE TABLE "DiscordUniversity" (
    "id" TEXT NOT NULL,
    "discordUserId" TEXT,
    "universityUserId" TEXT,

    CONSTRAINT "DiscordUniversity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DiscordUniversity" ADD CONSTRAINT "DiscordUniversity_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordUniversity" ADD CONSTRAINT "DiscordUniversity_universityUserId_fkey" FOREIGN KEY ("universityUserId") REFERENCES "UniversityUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
