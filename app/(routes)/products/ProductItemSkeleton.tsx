import { Skeleton } from '@/components/ui/skeleton';
import { IProduct } from '@/util/dummyProduct';
import Image from 'next/image';

export function ProductItemSkeleton() {
  return (
    <div className="pt-4 w-full">
      <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
        <Skeleton className="flex-grow-0 flex-shrink-0 w-[110px] h-[110px] rounded" />

        <div className="flex flex-col">
          <div className=" space-y-1 w-full">
            <div className="space-y-2">
              <Skeleton className="h-5 w-[220px]" />
              <Skeleton className="h-5 w-[150px]" />
              <Skeleton className="h-3 w-[30px]" />
              <Skeleton className="h-4 w-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

