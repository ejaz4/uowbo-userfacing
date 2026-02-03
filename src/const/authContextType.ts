export type AuthContextType ({
  refreshing: boolean;
} & AuthTokens)

export interface AuthTokens {
  discordAccessToken?: {
    token: string;
    expiry: Date;
  };
}
