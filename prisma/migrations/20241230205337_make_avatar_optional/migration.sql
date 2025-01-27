-- DropForeignKey
ALTER TABLE "AuthorityHit" DROP CONSTRAINT "AuthorityHit_discordUniversityId_fkey";

-- DropForeignKey
ALTER TABLE "DiscordUniversity" DROP CONSTRAINT "DiscordUniversity_discordUserId_fkey";

-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_discordUserId_fkey";

-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_guildsId_fkey";

-- AlterTable
ALTER TABLE "DiscordUser" ALTER COLUMN "avatar" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_guildsId_fkey" FOREIGN KEY ("guildsId") REFERENCES "Guilds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordUniversity" ADD CONSTRAINT "DiscordUniversity_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorityHit" ADD CONSTRAINT "AuthorityHit_discordUniversityId_fkey" FOREIGN KEY ("discordUniversityId") REFERENCES "DiscordUniversity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
