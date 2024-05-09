'use client';

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IInputTextProps {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
}
export const InputText = ({ name, label, placeholder, className }: IInputTextProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: InputProps & React.RefAttributes<HTMLInputElement> }) => (
        <FormItem>
          <p className="text-xs">{label}</p>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
