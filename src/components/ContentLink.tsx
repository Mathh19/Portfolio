type ContentLinkProps = {
  children: React.ReactNode;
};

export const ContentLink = ({ children }: ContentLinkProps) => {
  return (
    <div className="flex justify-center items-center gap-2 px-3 py-1.5 border border-background-color bg-white-color text-background-color font-semibold rounded-md">
      {children}
    </div>
  );
};
