import { ChooserContainer, ChooserOption } from "@/app/_components/chooser";
import RemoveCardHolder from "@/app/_components/svg/remove-card-holder.svg";

export const Unfasten = ({ set }: { set: (val: string) => void }) => {
  return (
    <>
      <h2>Remove your card from its holder</h2>
      <p>Take your card out of its holder or unfasten its lanyard.</p>
      <RemoveCardHolder />
      <ChooserContainer>
        <ChooserOption label="Got it" />
      </ChooserContainer>
    </>
  );
};
