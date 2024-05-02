'use client';

import { IconNotification, IconSearch } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import api from '@/hooks/axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CategorySelector } from './CategorySelector';
import { ProductItem } from './ProductItem';
import { ProductItemSkeleton } from './ProductItemSkeleton';
import InfiniteScroll from 'react-infinite-scroll-component';
import { IProduct } from '../product/product.type';

const defaultTake = 10;
export default function ProductList() {
  const [hasMore, setHasMore] = useState(true);

  const [nowCategory, setNowCategory] = useState<string>('');
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [lastId, setLastId] = useState<string>();

  const handleCategoryChange = (value: string) => {
    setNowCategory(value);
  };

  const getProductByCategory = async () => {
    if (nowCategory) {
      let cursor = '';

      if (lastId) {
        cursor = `&cursorId=${lastId}`;
      }
      const res = await api.get(`/product/category_cursor/${nowCategory}?take=${defaultTake}&${cursor}`);
      const { data } = res;
      // 더 불러올 데이터가 있는지 확인
      if (data.length === 0) {
        setHasMore(false);
        return;
      }
      const isAlready = productList.find((product) => product.id === data[0].id);
      if (isAlready) {
        return;
      }
      setProductList((prev) => [...prev, ...data]);

      if (data.length > 0) {
        setLastId(data[data.length - 1].id);
      }
      // 더 불러올 데이터가 있는지 확인
      if (data.length === 0) {
        setHasMore(false);
      }
    }
  };
  useEffect(() => {
    setNowCategory('110');
  }, []);
  useEffect(() => {
    if (nowCategory) {
      setProductList([]);
      setLastId('');
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
        <InfiniteScroll
          dataLength={productList.length}
          next={getProductByCategory}
          hasMore={hasMore}
          loader={
            <>
              <ProductItemSkeleton />
              <ProductItemSkeleton />
              <ProductItemSkeleton />
              <ProductItemSkeleton />
              <ProductItemSkeleton />
            </>
          }
          endMessage={<p></p>}
        >
          {productList.map((product) => {
            return <ProductItem {...product} key={product.id} />;
          })}
        </InfiniteScroll>
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

