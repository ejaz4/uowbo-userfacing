import { FlowCard } from "./_components/card";
import { Logo } from "./_components/logo";
import styles from "./index.module.css";

export default async function Home() {
  return (
    <main className={styles.flow}>
      <Logo />

      <FlowCard>
        <h1>This is</h1>
        <p>bingus</p>
      </FlowCard>
    </main>
  );
}
