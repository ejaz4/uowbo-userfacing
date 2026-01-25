import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { type NextRequest } from "next/server";

import { env } from "~/env";
import { appRouter } from "~/server/api/root";
import { createTRPCContext } from "~/server/api/trpc";

/**
 * This wraps the `createTRPCContext` helper and provides the required context for the tRPC API when
 * handling a HTTP request (e.g. when you make requests from Client Components).
 */
// 1. ADDED `resHeaders: Headers` as the second argument
const createContext = async (req: NextRequest, resHeaders: Headers) => {
  return createTRPCContext({
    headers: req.headers,
    resHeaders: resHeaders, // 2. PASS the response headers to your internal context
  });
};

const handler = async (req: NextRequest) => {
  // 3. CREATE the Headers object to capture outgoing cookies
  const resHeaders = new Headers();

  const response = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    // 4. PASS the headers into the context creator
    createContext: () => createContext(req, resHeaders),
    // 5. INJECT the headers into the final Next.js response
    onError:
      env.NODE_ENV === "development"
        ? ({ path, error }) => {
            console.error(
              `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
            );
          }
        : undefined,
  });

  // 4. FORCE INJECT the cookies into the final response
  resHeaders.forEach((value, key) => {
    response.headers.append(key, value);
  });

  return response;
};

export { handler as GET, handler as POST };
