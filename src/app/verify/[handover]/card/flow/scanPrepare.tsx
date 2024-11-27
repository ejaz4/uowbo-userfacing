import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import { Focus } from "lucide-react";

export const ScanPrepare = ({ set }: { set: (val: string) => void }) => {
  return (
    <Card
      footerRight={
        <Button
          label="Scan"
          image={<Focus size={16} />}
          onclick={() => set("scan")}
        />
      }
    >
      <h2>Preparing your card</h2>
      <p>
        When you are ready, tap <b>Scan</b>.
      </p>
      <p>
        Position your card against a plain white background and scan it with the
        assistance of the camera feed.
      </p>
      <p>A good scan should:</p>
      <ul>
        <li>Have all four corners visible</li>
        <li>Be free from reflections</li>
        <li>Be well-lit</li>
        <li>Be sharp and readable</li>
        <li>Not be obstructed</li>
      </ul>
    </Card>
  );
};
