import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextResponse, type NextRequest } from "next/server";

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
  const resHeaders = new Headers();

  // 1. Get the raw response from tRPC
  const trpcResponse = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createContext(req, resHeaders),
  });

  // 2. Combine tRPC's default headers with your custom cookie headers
  const finalHeaders = new Headers(trpcResponse.headers);
  resHeaders.forEach((value, key) => {
    finalHeaders.append(key, value);
  });

  // 3. 🚀 FORCE Next.js to send the headers using its native NextResponse object
  return new NextResponse(trpcResponse.body, {
    status: trpcResponse.status,
    statusText: trpcResponse.statusText,
    headers: finalHeaders,
  });
};

export { handler as GET, handler as POST };
