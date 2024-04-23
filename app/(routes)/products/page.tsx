'use client';

import { IconNotification, IconSearch } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import api from '@/hooks/axios';
import { IProduct } from '@/util/dummyProduct';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CategorySelector } from './CategorySelector';
import { ProductItem } from './ProductItem';
import { ProductItemSkeleton } from './ProductItemSkeleton';

export default function ProductList() {
  const [nowCategory, setNowCategory] = useState<string>('110');
  const [productList, setProductList] = useState<IProduct[]>([]);

  const handleCategoryChange = (value: string) => {
    setNowCategory(value);
  };

  const getProductByCategory = async () => {
    if (nowCategory) {
      const res = await api.get(`/product/category/${nowCategory}`);
      const { data } = res;
      setProductList(data);
    }
  };

  useEffect(() => {
    if (nowCategory) {
      getProductByCategory();
    }
  }, [nowCategory]);
  return (
    <div>
      <HeaderFixed>
        <div className="flex gap-1">
          <p className="text-lg font-bold text-left text-black">
            <CategorySelector value={nowCategory} onChange={handleCategoryChange} />
          </p>
        </div>
        <div className="flex gap-4">
          <IconSearch className="text-xl" />
          <IconNotification className="text-xl" />
        </div>
      </HeaderFixed>
      <div className="flex flex-col divide-y divide-gray-300 space-y-4 p-4 pt-0 bg-white">
        {productList.length ? (
          productList.map((product) => {
            return <ProductItem {...product} key={product.id} />;
          })
        ) : (
          <>
            <ProductItemSkeleton />
            <ProductItemSkeleton />
            <ProductItemSkeleton />
            <ProductItemSkeleton />
            <ProductItemSkeleton />
          </>
        )}
      </div>
      <div className="py-8 bg-white" />
      <Link href="/add">
        <button className="fixed bottom-20 right-4 bg-blue-200 w-12 h-12 text-3xl flex items-center  justify-center rounded-full">
          <i className="ri-add-line"></i>
        </button>
      </Link>
    </div>
  );
}

