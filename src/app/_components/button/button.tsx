import { LoaderCircleIcon } from "lucide-react";

export const Button = ({
  label,
  image,
  onclick,
  loading,
  direction = "ltr",
}: {
  label: string;
  image?: React.ReactNode;
  onclick?: () => void;
  loading?: boolean;
  direction?: string;
}) => {
  return (
    <button dir={direction} onClick={onclick || (() => {})}>
      {!loading && image}
      {loading && <LoaderCircleIcon className="load" size={16} />}
      <p>{label}</p>
    </button>
  );
};
