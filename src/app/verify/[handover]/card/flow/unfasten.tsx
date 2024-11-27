import { Button } from "@/app/_components/button/button";
import { Card } from "@/app/_components/card/card";
import RemoveCardHolder from "@/app/_components/svg/remove-card-holder.svg";
import { ChevronRight } from "lucide-react";

export const Unfasten = ({ set }: { set: (val: string) => void }) => {
  return (
    <Card
      footerRight={
        <Button
          label="Next"
          direction="rtl"
          image={<ChevronRight size={16} />}
          onclick={() => set("scanPrepare")}
        />
      }
    >
      <h2>Remove your card from its holder</h2>
      <p>Take your card out of its holder or unfasten its lanyard.</p>
      <RemoveCardHolder />
      <p>
        All four corners of your ID should be visible with nothing obscuring it
        from the edges.
      </p>
    </Card>
  );
};
