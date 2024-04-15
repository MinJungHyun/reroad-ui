"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";

import { RefAttributes } from "react";
import { IconLeft } from "@/components/icon";
import { HeaderFixed } from "@/components/layout/HeaderFixed";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

function AddProductHeader() {
  return (
    <HeaderFixed>
      <div className="w-full flex justify-between gap-4 h-7">
        <div className="flex-0 flex ">
          <Link href=":">
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
}

const formSchema = z.object({
  productName: z.string().min(2, {
    message: "사용자 이름은 최소 2글자 이상이어야 합니다.",
  }),
  locations: z
    .array(z.string())
    .refine((value: string[]) => value.some((item: string) => item), {
      message: "적어도 하나의 항목을 선택해야 합니다.",
    }),
  price: z.string().min(1, {
    message: "가격은 최소 1글자 이상이어야 합니다.",
  }),
  description: z.string().min(1, {
    message: "설명은 최소 1글자 이상이어야 합니다.",
  }),
});
const items = [
  {
    id: "1",
    label: "서울 강서구",
  },
  {
    id: "2",
    label: "서울 강남구",
  },
];

export default function AddProduct() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      locations: [],
      price: "",
      description: "",
    },
  });

  const onCheckedChange = (
    field: InputProps & RefAttributes<HTMLInputElement>,
    checked: boolean
  ) => {
    if (Array.isArray(field.value)) {
      if (checked) {
        // FIXME:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        field.onChange([...field.value, item.id]);
      } else {
        // FIXME:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        field.onChange(field.value.filter((value) => value !== item.id));
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
        {/* 이미지 업로드 버튼 */}
        <div className="p-4 space-y-4 ">
          <FormField
            control={form.control}
            name="productName"
            render={({
              field,
            }: {
              field: InputProps & React.RefAttributes<HTMLInputElement>;
            }) => (
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
            render={({
              field,
            }: {
              field: InputProps & React.RefAttributes<HTMLInputElement>;
            }) => (
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
            render={({
              field,
            }: {
              field: InputProps & React.RefAttributes<HTMLInputElement>;
            }) => (
              <FormItem>
                <FormLabel className="text-xs">자세한 설명</FormLabel>
                <FormControl>
                  {/*
                  // FIXME:
                  eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  @ts-ignore */}
                  <Textarea
                    placeholder="상품의 연식, 상태를 자세히 적어주세요."
                    {...field}
                    className="h-36"
                  />
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
                    render={({
                      field,
                    }: {
                      field: InputProps & React.RefAttributes<HTMLInputElement>;
                    }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-start space-x-3 space-y-0"
                        >
                          <FormControl>
                            <Checkbox
                              checked={
                                Array.isArray(field.value) &&
                                field.value.includes(item.id)
                              }
                              onCheckedChange={onCheckedChange}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-normal">
                            {item.label}
                          </FormLabel>
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
          <Button type="submit" className="  w-full ">
            완료
          </Button>
        </div>
      </form>
    </Form>
  );
}
