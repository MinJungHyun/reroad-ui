'use client';

import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Textarea, TextareaProps } from '@/components/ui/textarea';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IInputTextareaProps {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
}
export const InputTextarea = ({ name, label, placeholder, className }: IInputTextareaProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: { field: TextareaProps & React.RefAttributes<HTMLTextAreaElement> }) => (
        <FormItem>
          <p className="text-xs">{label}</p>
          <FormControl>
            <Textarea placeholder={placeholder} {...field} className={className} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
