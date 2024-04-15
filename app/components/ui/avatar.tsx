import { cn } from "@/lib/utils";

export function Avatar({
  className,

  src,
}: {
  className?: string;

  src: string;
}) {
  return (
    <div
      className={cn(
        className,
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      )}
    >
      <img
        src={src}
        className={cn("aspect-square h-full w-full", className)}
        alt="square"
      />
    </div>
  );
}
