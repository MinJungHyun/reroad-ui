'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { IconLeft } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  productName: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  locations: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one item.'
  }),
  price: z.string().min(1, {
    message: 'Price must be at least 1 characters.'
  }),
  description: z.string().min(1, {
    message: 'Description must be at least 1 characters.'
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const AddProductHeader = () => {
    return (
      <HeaderFixed>
        <div className="w-full flex justify-between gap-4 h-7">
          <div className="flex-0 flex ">
            <Link href="">
              <IconLeft className="text-xl" />
            </Link>
          </div>
          <div className="flex-auto text-m">내 물건 팔기</div>
          <div className="flex-0 flex gap-4">
            <div className="text-xs flex items-center">임시저장</div>
          </div>
        </div>
      </HeaderFixed>
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <AddProductHeader />
        {/* 이미지 업로드 버튼 */}
        <div className="p-4 space-y-4 ">
          <FormField
            control={form.control}
            name="productName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">상품명</FormLabel>
                <FormControl>
                  <Input placeholder="상품명" {...field} />
                </FormControl>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">거래방식</FormLabel>
                <FormControl>
                  <Input placeholder="￦ 가격을 입력해주세요" {...field} />
                </FormControl>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">자세한 설명</FormLabel>
                <FormControl>
                  <Textarea placeholder="상품의 연식, 상태를 자세히 적어주세요." {...field} className="h-36" />
                </FormControl>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="locations"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-xs">거래희망장소</FormLabel>
                </div>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="locations"
                    render={({ field }) => {
                      return (
                        <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                console.log(field);
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(field.value?.filter((value) => value !== item.id));
                              }}
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
          <Button type="submit" className={'  w-full '}>
            완료
          </Button>
        </div>
      </form>
    </Form>
  );
}

