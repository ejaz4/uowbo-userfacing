// lib/tokenUtil.ts

// We use a Record to store multiple token types (main, auth_temp, discord_temp, etc.)
type TokenRegistry = Record<string, string>;

let _tokenRegistry: TokenRegistry = {};

/**
 * Save a token to memory.
 * @param key - 'main', 'auth_temp', 'discord_temp'
 * @param token - The JWT string
 */
export const setAccessToken = (key: string, token: string | null): void => {
  if (token === null) {
    delete _tokenRegistry[key];
  } else {
    _tokenRegistry[key] = token;
  }
};

/**
 * Retrieve a token from memory.
 */
export const getAccessToken = (key: string = "main"): string | undefined => {
  return _tokenRegistry[key];
};

/**
 * Clear all tokens (e.g., on Logout).
 */
export const clearTokens = (): void => {
  _tokenRegistry = {};
};
