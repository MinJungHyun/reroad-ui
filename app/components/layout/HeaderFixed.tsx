import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  border?: boolean;
}
export function HeaderFixed({ children, border }: Props) {
  return (
    <div
      className={classNames(
        'flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 px-4 py-3 bg-white sticky top-0 z-10',
        {
          'border-b border-gray-200': border
        }
      )}
    >
      {children}
    </div>
  );
}

