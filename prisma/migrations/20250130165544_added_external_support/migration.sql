-- AlterTable
ALTER TABLE "DiscordUniversity" ADD COLUMN     "helperCode" TEXT,
ADD COLUMN     "helperId" TEXT;

-- AlterTable
ALTER TABLE "GuildSettings" ADD COLUMN     "allowsExternalEntry" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Guilds" ADD COLUMN     "discordUniversityId" TEXT;

-- AddForeignKey
ALTER TABLE "Guilds" ADD CONSTRAINT "Guilds_discordUniversityId_fkey" FOREIGN KEY ("discordUniversityId") REFERENCES "DiscordUniversity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordUniversity" ADD CONSTRAINT "DiscordUniversity_helperId_fkey" FOREIGN KEY ("helperId") REFERENCES "DiscordUniversity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
