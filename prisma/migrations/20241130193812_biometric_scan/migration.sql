-- CreateTable
CREATE TABLE "DiscordBiometric" (
    "id" TEXT NOT NULL,
    "discordUserId" TEXT NOT NULL,
    "biometricEntryId" TEXT NOT NULL,

    CONSTRAINT "DiscordBiometric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BiometricEntry" (
    "id" TEXT NOT NULL,
    "universityID" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BiometricEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BiometricEntry_universityID_key" ON "BiometricEntry"("universityID");

-- AddForeignKey
ALTER TABLE "DiscordBiometric" ADD CONSTRAINT "DiscordBiometric_discordUserId_fkey" FOREIGN KEY ("discordUserId") REFERENCES "DiscordUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscordBiometric" ADD CONSTRAINT "DiscordBiometric_biometricEntryId_fkey" FOREIGN KEY ("biometricEntryId") REFERENCES "BiometricEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
