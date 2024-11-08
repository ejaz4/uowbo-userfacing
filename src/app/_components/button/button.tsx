import { LoaderCircleIcon } from "lucide-react";

export const Button = ({
  label,
  image,
  onclick,
  loading,
}: {
  label: string;
  image?: React.ReactNode;
  onclick?: () => void;
  loading?: boolean;
}) => {
  return (
    <button onClick={onclick || (() => {})}>
      {!loading && image}
      {loading && <LoaderCircleIcon className="load" size={16} />}
      <p>{label}</p>
    </button>
  );
};
