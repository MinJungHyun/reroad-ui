'use client';

import { IconNotification, IconSearch } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { ProductItem } from '@/components/product/ProductItem';
import { dummyProduct } from '@/util/dummyProduct';
import Link from 'next/link';

export default function ProductList() {
  return (
    <div>
      <HeaderFixed>
        <div className="flex gap-1">
          <p className="text-lg font-bold text-left text-black">군자동</p>
          <i className="ri-arrow-down-s-line text-black text-2xl" />
        </div>
        <div className="flex gap-4">
          <IconSearch className="text-xl" />
          <IconNotification className="text-xl" />
        </div>
      </HeaderFixed>
      <div className="flex flex-col divide-y divide-gray-300 space-y-4 p-4 pt-0 bg-white">
        {dummyProduct.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
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

