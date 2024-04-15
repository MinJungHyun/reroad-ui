"use client";

import { IconNotification, IconSearch } from "@/components/icon";
import { HeaderFixed } from "@/components/layout/HeaderFixed";
import { dummyProduct } from "@/util/dummyProduct";
import { ProductItem } from "@/components/product/ProductItem";

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
      <div className="py-8 bg-gradient-to-b from-white to-[rgba(255,255,255,0)]" />
    </div>
  );
}
