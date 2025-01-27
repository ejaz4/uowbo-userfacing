-- CreateEnum
CREATE TYPE "Federated" AS ENUM ('NOT_FEDERATED', 'SUBMITTED', 'ACCEPTED', 'REJECTED');

-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_discordUserId_fkey";

-- DropForeignKey
ALTER TABLE "GuildUser" DROP CONSTRAINT "GuildUser_guildsId_fkey";

-- AlterTable
ALTER TABLE "AuthorityHit" ADD COLUMN     "federated" "Federated" NOT NULL DEFAULT 'NOT_FEDERATED';

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_guildsId_fkey" FOREIGN KEY ("guildsId") REFERENCES "Guilds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
