'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { InputCheckboxGroup } from '@/components/form/InputCheckboxGroup';
import { InputText } from '@/components/form/InputText';
import { InputTextarea } from '@/components/form/InputTextarea';
import { IInputToggleItem, InputToggleGroup } from '@/components/form/InputToggleGroups';
import { IconLeft } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import React from 'react';
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
  }),
  transactionMethod: z.array(z.string()).refine((value: string[]) => value.some((item: string) => item), {
    message: '적어도 하나의 항목을 선택해야 합니다.'
  })
});

const transactionMethodItems: IInputToggleItem[] = [
  {
    value: '1',
    label: '직거래'
  },
  {
    value: '2',
    label: '택배거래'
  }
];
const items = [
  {
    value: '1',
    label: '서울 강서구'
  },
  {
    value: '2',
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <AddProductHeader />
        <div className="pl-4 pb-4 bg-white">
          <ImageUploader />
        </div>
        {/* 이미지 업로드 버튼 */}
        <div className="p-4 space-y-12 bg-white pb-24">
          <InputText name="productName" label="상품명" placeholder="상품명"></InputText>
          <InputText name="price" label="가격" placeholder="￦ 가격을 입력해주세요"></InputText>
          <InputTextarea
            name="description"
            label="자세한 설명"
            placeholder="상품의 연식, 상태를 자세히 적어주세요."
            className={'h-36'}
          ></InputTextarea>
          <InputCheckboxGroup name="locations" label="거래희망장소" options={items}></InputCheckboxGroup>
          <InputToggleGroup name="transactionMethod" label="거래 방식" options={transactionMethodItems}></InputToggleGroup>
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

