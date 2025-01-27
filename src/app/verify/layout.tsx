"use client";
import Link from "next/link";
import { useGuild } from "./libs/useGuild";

const VerifyLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const guildId = useGuild();

  return (
    <div
      style={{
        paddingTop: 200,
        paddingBottom: 200,
        boxSizing: "border-box",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        margin: 0,
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      {children}
      <div className="floating-strip">
        <Link href={"/privacy"}>Privacy</Link>
      </div>
    </div>
  );
};

export default VerifyLayout;
