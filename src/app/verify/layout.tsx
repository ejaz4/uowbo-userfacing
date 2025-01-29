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
    <div className="cardContainer">
      {children}
      <div className="floating-strip">
        <Link href={"/"}>Powered by uowbo!</Link>
        <Link href={"/privacy"}>Privacy</Link>
      </div>
    </div>
  );
};

export default VerifyLayout;
