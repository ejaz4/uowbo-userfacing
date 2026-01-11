-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkedPlatforms" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,

    CONSTRAINT "LinkedPlatforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordGuild" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "linkedToId" TEXT,

    CONSTRAINT "DiscordGuild_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordGuildMember" (
    "id" TEXT NOT NULL,
    "discordGuildId" TEXT NOT NULL,
    "discordAccountLinkId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordGuildMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordGuildMessage" (
    "id" TEXT NOT NULL,
    "message" TEXT,
    "parentMessageId" TEXT,
    "userId" TEXT,
    "attachmentUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscordGuildMessage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LinkedAccounts" (
    "id" TEXT NOT NULL,
    "studentProfileId" TEXT NOT NULL,

    CONSTRAINT "LinkedAccounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscordAccountLink" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "linkedAccountsId" TEXT,

    CONSTRAINT "DiscordAccountLink_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationMethods" (
    "id" TEXT NOT NULL,
    "studentProfileId" TEXT NOT NULL,

    CONSTRAINT "VerificationMethods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailVerification" (
    "id" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "verificationCode" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "expiresAt" TIMESTAMP(3),
    "verificationMethodsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailVerification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentProfile" (
    "id" TEXT NOT NULL,
    "fullName" TEXT,
    "studentId" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudentProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSettings" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en',

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LinkedPlatforms_tenantId_key" ON "LinkedPlatforms"("tenantId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordGuild_linkedToId_key" ON "DiscordGuild"("linkedToId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordGuildMember_discordGuildId_discordAccountLinkId_key" ON "DiscordGuildMember"("discordGuildId", "discordAccountLinkId");

-- CreateIndex
CREATE UNIQUE INDEX "LinkedAccounts_studentProfileId_key" ON "LinkedAccounts"("studentProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordAccountLink_username_key" ON "DiscordAccountLink"("username");

-- CreateIndex
CREATE UNIQUE INDEX "DiscordAccountLink_linkedAccountsId_key" ON "DiscordAccountLink"("linkedAccountsId");

-- CreateIndex
CREATE UNIQUE INDEX "StudentProfile_studentId_key" ON "StudentProfile"("studentId");

-- AddForeignKey
ALTER TABLE "LinkedPlatforms" ADD CONSTRAINT "LinkedPlatforms_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordGuild" ADD CONSTRAINT "DiscordGuild_linkedToId_fkey" FOREIGN KEY ("linkedToId") REFERENCES "LinkedPlatforms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordGuildMember" ADD CONSTRAINT "DiscordGuildMember_discordGuildId_fkey" FOREIGN KEY ("discordGuildId") REFERENCES "DiscordGuild"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordGuildMember" ADD CONSTRAINT "DiscordGuildMember_discordAccountLinkId_fkey" FOREIGN KEY ("discordAccountLinkId") REFERENCES "DiscordAccountLink"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordGuildMessage" ADD CONSTRAINT "DiscordGuildMessage_parentMessageId_fkey" FOREIGN KEY ("parentMessageId") REFERENCES "DiscordGuildMessage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordGuildMessage" ADD CONSTRAINT "DiscordGuildMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "DiscordGuildMember"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LinkedAccounts" ADD CONSTRAINT "LinkedAccounts_studentProfileId_fkey" FOREIGN KEY ("studentProfileId") REFERENCES "StudentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordAccountLink" ADD CONSTRAINT "DiscordAccountLink_linkedAccountsId_fkey" FOREIGN KEY ("linkedAccountsId") REFERENCES "LinkedAccounts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VerificationMethods" ADD CONSTRAINT "VerificationMethods_studentProfileId_fkey" FOREIGN KEY ("studentProfileId") REFERENCES "StudentProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmailVerification" ADD CONSTRAINT "EmailVerification_verificationMethodsId_fkey" FOREIGN KEY ("verificationMethodsId") REFERENCES "VerificationMethods"("id") ON DELETE SET NULL ON UPDATE CASCADE;
