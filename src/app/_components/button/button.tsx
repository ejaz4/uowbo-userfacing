export const Button = ({
  label,
  image,
  onclick,
}: {
  label: string;
  image?: React.ReactNode;
  onclick?: () => void;
}) => {
  return (
    <button onClick={onclick || (() => {})}>
      {image}
      <p>{label}</p>
    </button>
  );
};
