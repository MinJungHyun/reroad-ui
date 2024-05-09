'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';

export interface IInputCheckboxItem {
  label: string;
  value: string;
}
interface IInputCheckboxGroupsProps {
  name: string;
  label: string;
  options: IInputCheckboxItem[];
  defaultValue?: string[];
  className?: string;
}
export const InputCheckboxGroup = ({ name, label, options, defaultValue, className }: IInputCheckboxGroupsProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <p className="text-xs">{label}</p>
          {options.map((item) => (
            <FormItem key={item.value} className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={Array.isArray(field.value) && field.value.includes(item.value)}
                  onCheckedChange={(checked) => {
                    return checked
                      ? field.onChange([...field.value, item.value])
                      : field.onChange(field.value?.filter((value: string) => value !== item.value));
                  }}
                />
              </FormControl>
              <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
            </FormItem>
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
