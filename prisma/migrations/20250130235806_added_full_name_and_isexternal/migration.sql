-- AlterTable
ALTER TABLE "DiscordUniversity" ADD COLUMN     "fullName" TEXT,
ADD COLUMN     "isExternal" BOOLEAN NOT NULL DEFAULT false;
