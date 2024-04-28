import classNames from "classnames";

import {
  Select,
  SelectContent,
  SelectItem,
  // SelectScrollDownButton,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/category";

export function CategorySelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={categories[0].name} />
      </SelectTrigger>
      <SelectContent
        ref={(ref) =>
          ref?.addEventListener("touchend", (e) => e.preventDefault())
        }
      >
        {categories.map((category) => (
          <SelectItem
            key={category.id}
            value={`${category.id}`}
            className={classNames("", {
              "pl-4": category.textIndent,
            })}
          >
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
