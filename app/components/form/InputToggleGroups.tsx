'use client';

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useFormContext } from 'react-hook-form';

export interface IInputToggleItem {
  label: string;
  value: string;
}
interface IInputToggleGroupsProps {
  name: string;
  label: string;
  options: IInputToggleItem[];
  defaultValue?: string[];
  className?: string;
}
export const InputToggleGroup = ({ name, label, options, defaultValue, className }: IInputToggleGroupsProps) => {
  const { control } = useFormContext();
  console.log('@@@@', defaultValue);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <p className="text-xs">{label}</p>
          <ToggleGroup
            key={field.name}
            className="justify-start"
            type="multiple"
            variant="outline"
            defaultValue={defaultValue != undefined ? defaultValue : []}
            onValueChange={(e) => {
              console.log('@@@@', e);

              field.onChange(e);
            }}
          >
            {options.map((item) => (
              <FormControl key={item.value}>
                <ToggleGroupItem value={item.value}>{item.label}</ToggleGroupItem>
              </FormControl>
            ))}
          </ToggleGroup>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
