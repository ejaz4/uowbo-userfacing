"use client";

import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import { httpBatchStreamLink, loggerLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { useState } from "react";
import SuperJSON from "superjson";

import { type AppRouter } from "~/server/api/root";
import { createQueryClient } from "./query-client";
import { getAccessToken } from "~/libs/tokenUtil";
import { secureFetch } from "~/libs/secureFetch";

let clientQueryClientSingleton: QueryClient | undefined = undefined;
const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  clientQueryClientSingleton ??= createQueryClient();

  return clientQueryClientSingleton;
};

export const api = createTRPCReact<AppRouter>();

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export function TRPCReactProvider(props: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchStreamLink({
          transformer: SuperJSON,
          url: getBaseUrl() + "/api/trpc",
          // --- DYNAMIC HEADER INJECTION ---
          async headers(opts) {
            // 1. Always attempt to attach the Main Token to standard Auth header
            const mainToken = getAccessToken("main");

            const headerList: Record<string, string> = {
              ...(mainToken ? { Authorization: `Bearer ${mainToken}` } : {}),
            };

            // 2. Check Context for Extra Tokens (Multi-Token Logic)
            // We iterate through operations to see if any requested extra headers.
            opts.opList.forEach((op) => {
              const { tokenMap } = op.context as {
                tokenMap?: Record<string, string>;
              };

              // Example Usage in Component:
              // context: { tokenMap: { 'X-OTP-Token': 'auth_temp' } }
              if (tokenMap) {
                Object.entries(tokenMap).forEach(
                  ([headerName, registryKey]) => {
                    const extraToken = getAccessToken(registryKey);
                    if (extraToken) {
                      headerList[headerName] = extraToken;
                    }
                  },
                );
              }
            });

            headerList["x-trpc-source"] = "nextjs-react";

            return headerList;
          },
          // --------------------------------

          // --- PLUG IN CUSTOM FETCH ---
          // This ensures tRPC uses our wrapper for networking
          fetch: async (url, options) => {
            return secureFetch(url as string, options as any);
          },
        }),
      ],
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {props.children}
      </api.Provider>
    </QueryClientProvider>
  );
}

function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}
