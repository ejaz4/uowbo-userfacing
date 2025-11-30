import { FlowCard } from "./_components/card";
import { Logo } from "./_components/logo";

export default async function Home() {
  return (
    <main>
      <Logo />
      <FlowCard>
        <p>bingus</p>
      </FlowCard>
    </main>
  );
}
