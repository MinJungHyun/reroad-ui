interface Props {
  children: React.ReactNode;
}
export const HeaderSticky = ({ children }: Props) => {
  return (
    <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 px-4 py-3 bg-white sticky top-0  bg-gray-300 z-10">
      {children}
    </div>
  );
};

