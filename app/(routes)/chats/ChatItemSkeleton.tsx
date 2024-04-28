import { Skeleton } from "@/components/ui/skeleton";

export function ChatItemSkeleton() {
  return (
    <div className="flex justify-start w-full gap-4 p-4">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="flex-auto justify-center flex flex-col gap-1 ">
        <div className="flex justify-start items-center gap-1">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[60px]" />
            <Skeleton className="h-5 w-[250px]" />
          </div>
        </div>
        <Skeleton className="text-sm text-black" />
      </div>
    </div>
  );
}
