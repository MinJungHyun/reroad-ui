'use client';
import { IconNotification, IconSearch } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { dummy_product } from '@/util/dummy_product';
import { ProductItem } from '@/components/product/ProductItem';

export default function ProductList() {
  return (
    <div>
      <HeaderFixed>
        <div className="flex gap-1">
          <p className="text-lg font-bold text-left text-black">군자동</p>
          <i className="ri-arrow-down-s-line text-black text-2xl"></i>
        </div>
        <div className="flex gap-4">
          <IconSearch className="text-xl" />
          <IconNotification className="text-xl" />
        </div>
      </HeaderFixed>
      <div className="flex flex-col divide-y divide-gray-300 space-y-4 p-4 pt-0 bg-white">
        {dummy_product.map((product, index) => (
          <ProductItem {...product} key={index} />
        ))}
      </div>
      <div className="py-8 bg-gradient-to-b from-white to-[rgba(255,255,255,0)]"></div>
    </div>
  );
}

