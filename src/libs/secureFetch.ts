// lib/secureFetch.ts
import { getAccessToken, setAccessToken, clearTokens } from "./tokenUtil";

interface SecureFetchOptions extends RequestInit {
  tokenKey?: string; // Which token to use for the 'Authorization' header? Default: 'main'
}

// SINGLETON PROMISE: Prevents multiple requests from firing multiple refreshes at once.
let isRefreshing = false;
let refreshPromise: Promise<void> | null = null;

export const secureFetch = async (
  url: string,
  options: SecureFetchOptions = {},
): Promise<Response> => {
  const { tokenKey = "main", ...fetchOptions } = options;

  // 1. Prepare Headers & Inject the requested token
  const headers = new Headers(fetchOptions.headers || {});
  const token = getAccessToken(tokenKey);

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const config: RequestInit = {
    ...fetchOptions,
    headers,
    // IMPORTANT: 'include' allows the browser to send/receive the HttpOnly Refresh Cookie
    credentials: "include",
  };

  // 2. Execute Request
  let response = await fetch(url, config);

  // 3. Handle 401 Unauthorized (Session Expiry)
  // We only attempt auto-refresh if the MAIN token expired.
  // If a temporary token (like Discord) expires, we usually want the UI to handle that error.
  if (response.status === 401 && tokenKey === "main") {
    if (!isRefreshing) {
      isRefreshing = true;

      // Start the refresh process
      refreshPromise = (async () => {
        try {
          // Call backend to exchange HttpOnly Cookie for new Access Token(s)
          const refreshRes = await fetch(
            "https://api.yourdomain.com/auth/refresh",
            {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
            },
          );

          if (!refreshRes.ok) throw new Error("Refresh failed");

          const data = await refreshRes.json();
          // Assume backend returns: { tokens: { main: "ey..." } }
          const { tokens } = data;

          // Update Registry
          Object.keys(tokens).forEach((k) => setAccessToken(k, tokens[k]));
        } catch (error) {
          console.error("Session expired:", error);
          clearTokens();
          window.location.href = "/login"; // Force hard redirect to login
          throw error;
        } finally {
          isRefreshing = false;
          refreshPromise = null;
        }
      })();
    }

    // 4. Wait for the refresh (whether we started it or someone else did)
    if (refreshPromise) {
      try {
        await refreshPromise;

        // 5. Retry the Original Request with the new token
        const newToken = getAccessToken("main");
        if (newToken) headers.set("Authorization", `Bearer ${newToken}`);

        return fetch(url, { ...config, headers });
      } catch (error) {
        // If refresh failed, throw the original error
        throw error;
      }
    }
  }

  return response;
};
