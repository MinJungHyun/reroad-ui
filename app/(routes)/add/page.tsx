'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { IconLeft } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input, InputProps } from '@/components/ui/input';
import { Textarea, TextareaProps } from '@/components/ui/textarea';
import { RefAttributes, useState } from 'react';
import { useRouter } from 'next/navigation';

import React, { useRef } from 'react';
import { ImageUploader } from './ImageUploader';

const SaveCheckDialog = ({ children }: { children: React.ReactNode }) => {
  const Router = useRouter();
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-[250px]">
        <DialogHeader>
          <DialogTitle className="text-sm text-left">작성 중인 판매 글을 저장할까요?</DialogTitle>
          <DialogDescription>
            <Button className="w-full mb-1">저장</Button>
            <Button
              className="w-full bg-slate-300"
              onClick={() => {
                Router.push('/products');
              }}
            >
              저장 안 함
            </Button>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
function AddProductHeader() {
  return (
    <HeaderFixed border>
      <div className="w-full flex justify-between gap-4 h-7">
        <div className="flex-0 flex gap-2 items-center ">
          <SaveCheckDialog>
            <IconLeft />
          </SaveCheckDialog>
          <div className="flex-auto text-lg font-bold text-left text-black">내 물건 팔기</div>
        </div>
        <div className="flex-0 flex">
          <div className="text-l flex items-center">임시저장</div>
        </div>
      </div>
    </HeaderFixed>
  );
}

const formSchema = z.object({
  productName: z.string().min(2, {
    message: '상품명을 적어주세요.'
  }),
  locations: z.array(z.string()).refine((value: string[]) => value.some((item: string) => item), {
    message: '적어도 하나의 항목을 선택해야 합니다.'
  }),
  price: z.string().min(1, {
    message: '가격을 적어주세요.'
  }),
  description: z.string().min(1, {
    message: '설명을 적어주세요.'
  })
});
const items = [
  {
    id: '1',
    label: '서울 강서구'
  },
  {
    id: '2',
    label: '서울 강남구'
  }
];

export default function AddProduct() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: '',
      locations: [],
      price: '',
      description: ''
    }
  });

  const onCheckedChange = (field: InputProps & RefAttributes<HTMLInputElement>, checked: boolean) => {
    if (Array.isArray(field.value)) {
      if (checked) {
        // field.onChange([...field.value, item.id]);
      } else {
        // field.onChange(field.value.filter((value) => value !== item.id));
      }
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <AddProductHeader />
        <div className="p-4 pr-0 bg-white">
          <ImageUploader />
        </div>
        {/* 이미지 업로드 버튼 */}
        <div className="p-4 space-y-12 bg-white">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }: { field: InputProps & React.RefAttributes<HTMLInputElement> }) => (
              <FormItem>
                <p className="text-xs">상품명</p>
                <FormControl>
                  <Input placeholder="상품명" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }: { field: InputProps & React.RefAttributes<HTMLInputElement> }) => (
              <FormItem>
                <p className="text-xs">거래방식</p>
                <FormControl>
                  <Input placeholder="￦ 가격을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }: { field: TextareaProps & React.RefAttributes<HTMLTextAreaElement> }) => (
              <FormItem>
                <p className="text-xs">자세한 설명</p>
                <FormControl>
                  <Textarea placeholder="상품의 연식, 상태를 자세히 적어주세요." {...field} className="h-36" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locations"
            render={() => (
              <FormItem>
                <p className="text-xs mb-4">거래희망장소</p>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="locations"
                    render={({ field }: { field: InputProps & React.RefAttributes<HTMLInputElement> }) => {
                      return (
                        <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={Array.isArray(field.value) && field.value.includes(item.id)}
                              onCheckedChange={(checked) => onCheckedChange(field, !!checked)}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">{item.label}</FormLabel>
                        </FormItem>
                      );
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="fixed bottom-0 left-0 right-0  max-w-[420px] min-w-[320px] w-full mx-auto flex flex-row items-center h-16 bg-white px-4 ">
          <Button type="submit" className="  w-full " size={'lg'}>
            완료
          </Button>
        </div>
      </form>
    </Form>
  );
}

