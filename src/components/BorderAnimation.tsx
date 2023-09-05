export const BorderAnimation = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative p-[2px] border-animation">
      <div className="rounded-lg z-50 relative bg-background-color p-[4px]">
        <div>{children}</div>
      </div>
    </div>
  );
};
