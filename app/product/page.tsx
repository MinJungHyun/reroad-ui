'use client';
import { dummy_products } from '@/util/dummy_product';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductList() {
  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white">
      <div className="flex flex-col justify-start items-center w-[390px] absolute left-0 top-[47px]">
        <div className="flex justify-between items-start self-stretch flex-grow-0 flex-shrink-0 px-4 py-3 bg-white">
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1.5">
            <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-black">군자동</p>
            <i className="ri-arrow-down-s-line text-black text-lg"></i>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
            <i className="ri-search-line text-xl text-[#333333]"></i>
            <i className="ri-menu-line text-xl text-[#333333]"></i>
            <i className="ri-notification-3-line text-xl text-[#333333]"></i>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-4 bg-white">
          {dummy_products.map((product, index) => (
            <Link href={`/product/${product.id}`} key={index}>
              <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
                <Image
                  src={`${product.image}`}
                  alt={product.title}
                  width={110}
                  height={110}
                  objectFit="cover"
                  className="flex-grow-0 flex-shrink-0 w-[110px] h-[110px] rounded"
                />
                <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1">
                  <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
                    <p className="flex-grow-0 flex-shrink-0 w-[232px] text-base text-left text-black">{product.title}</p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{product.location}</p>
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                      <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">26초 전</p>
                    </div>
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#ff7e36]">{product.price}</p>
                  </div>

                  <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-1">
                    {product.chatCount > 0 && (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                        <i className="ri-message-3-line text-[#8c8c8c]"></i>
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{product.chatCount}</p>
                      </div>
                    )}
                    {product.likeCount > 0 && (
                      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                        <i className="ri-heart-3-line text-[#8c8c8c]"></i>
                        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{product.likeCount}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="py-8 bg-gradient-to-b from-white to-[rgba(255,255,255,0)]"></div>
      </div>
    </div>
  );
}

