-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_discordUserId_fkey";

-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_guildsId_fkey";

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_guildsId_fkey" FOREIGN KEY ("guildsId") REFERENCES "Guilds"("guildId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("discordId") ON DELETE CASCADE ON UPDATE CASCADE;
