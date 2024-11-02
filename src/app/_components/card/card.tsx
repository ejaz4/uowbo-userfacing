export const Card = ({
  children,
  footerRight,
}: {
  children: React.ReactNode;
  footerRight?: React.ReactNode;
}) => {
  return (
    <>
      <div className="card">{children}</div>
      <div className="cardFooter">
        <div className="footerLeft"></div>
        <div className="footerRight">{footerRight}</div>
      </div>
    </>
  );
};
