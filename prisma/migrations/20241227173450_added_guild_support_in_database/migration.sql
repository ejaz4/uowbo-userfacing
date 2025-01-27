-- CreateTable
CREATE TABLE "Guilds" (
    "id" TEXT NOT NULL,
    "guildId" TEXT NOT NULL,
    "guildName" TEXT NOT NULL,
    "backgroundImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "guildSettingsId" TEXT NOT NULL,

    CONSTRAINT "Guilds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuildSettings" (
    "id" TEXT NOT NULL,
    "allowsEmailEntry" BOOLEAN NOT NULL DEFAULT false,
    "allowsBiometricEntry" BOOLEAN NOT NULL DEFAULT false,
    "verifiedRoleId" TEXT,
    "usesUowboNet" BOOLEAN NOT NULL DEFAULT true,
    "guildsId" TEXT NOT NULL,

    CONSTRAINT "GuildSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GuildUser" (
    "id" TEXT NOT NULL,
    "guildsId" TEXT,
    "discordUserId" TEXT,
    "isMod" BOOLEAN NOT NULL DEFAULT false,
    "isOwner" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "GuildUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guilds_guildId_key" ON "Guilds"("guildId");

-- AddForeignKey
ALTER TABLE "GuildSettings" ADD CONSTRAINT "GuildSettings_guildsId_fkey" FOREIGN KEY ("guildsId") REFERENCES "Guilds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_guildsId_fkey" FOREIGN KEY ("guildsId") REFERENCES "Guilds"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GuildUser" ADD CONSTRAINT "GuildUser_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE SET NULL ON UPDATE CASCADE;
