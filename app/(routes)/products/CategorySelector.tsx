import { Select, SelectContent, SelectItem, SelectScrollDownButton, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories } from '@/lib/category';

export const CategorySelector = ({ value, onChange }: { value: string; onChange: (val: string) => void }) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={categories[0].name} />
      </SelectTrigger>
      <SelectContent ref={(ref) => ref?.addEventListener('touchend', (e) => e.preventDefault())}>
        {categories.map((category) => (
          <SelectItem key={category.id} value={`${category.id}`}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

