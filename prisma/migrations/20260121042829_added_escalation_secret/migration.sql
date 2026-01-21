-- CreateTable
CREATE TABLE "DiscordSession" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "escalationSecret" TEXT NOT NULL,
    "isAuthenticated" BOOLEAN NOT NULL DEFAULT false,
    "isRevoked" BOOLEAN NOT NULL DEFAULT false,
    "discordAccountLinkId" TEXT,

    CONSTRAINT "DiscordSession_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DiscordSession_token_key" ON "DiscordSession"("token");

-- AddForeignKey
ALTER TABLE "DiscordSession" ADD CONSTRAINT "DiscordSession_discordAccountLinkId_fkey" FOREIGN KEY ("discordAccountLinkId") REFERENCES "DiscordAccountLink"("id") ON DELETE SET NULL ON UPDATE CASCADE;
