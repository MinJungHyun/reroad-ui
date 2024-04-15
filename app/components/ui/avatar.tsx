import { cn } from '@/lib/utils';
export const Avatar = ({ className, src }: { className?: string; src: string }) => {
  return (
    <div className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}>
      <img src={src} className={cn('aspect-square h-full w-full', className)} />
    </div>
  );
};

