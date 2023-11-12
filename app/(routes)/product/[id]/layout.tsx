import type { Metadata } from 'next';
import { Divider } from '~/components/hr';
import Link from 'next/link';
import { IProduct, dummy_product } from '~/util/dummy_product';
import { IProductProps } from './page';
import { IconHome, IconLink, IconMore } from '~/components/icon';

export default function ProductLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const { id } = params;
  const product: IProduct | null = dummy_product?.find((product) => product.id == Number(id)) || null;

  const ProductDetailHeader = () => {
    return (
      <div className="max-w-[420px] w-full flex flex-col justify-between items-start  fixed top-0 z-10">
        <div className=" w-full flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
            <div className="w-6 h-6 absolute left-[0px] top-[0px]">
              <Link href="/product">
                <i className="ri-arrow-left-s-line text-xl text-black"></i>
              </Link>
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
            <div className="w-6 h-6 absolute left-[50px] top-[0px]">
              <IconHome className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
            <div className="w-6 h-6 absolute left-[-0.5px] top-[-0.5px] object-contain">
              <IconLink className="text-xl" />
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
            <div className="w-6 h-6 absolute left-[63.5px] top-[-0.5p" />
            <IconMore className="text-xl " />
          </div>
        </div>
      </div>
    );
  };
  const ProductDetailFooter = ({ data }: IProductProps) => {
    return (
      <div className="max-w-[420px] w-full flex flex-col justify-start items-center fixed bottom-0">
        <div className=" w-full flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative">
          <Divider />
          <div className=" w-full flex justify-start items-center flex-grow-0 flex-shrink-0 max-w-[420px] gap-2 px-4 py-2 bg-white">
            <div className="flex justify-start items-center flex-grow relative gap-4">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M21.6328 6.64689C21.3187 5.91948 20.8657 5.2603 20.2992 4.70627C19.7323 4.15058 19.064 3.70898 18.3305 3.40549C17.5699 3.08953 16.7541 2.92781 15.9305 2.9297C14.775 2.9297 13.6477 3.24611 12.668 3.84377C12.4336 3.98674 12.2109 4.14377 12 4.31486C11.7891 4.14377 11.5664 3.98674 11.332 3.84377C10.3523 3.24611 9.225 2.9297 8.06953 2.9297C7.2375 2.9297 6.43125 3.08908 5.66953 3.40549C4.93359 3.71017 4.27031 4.14845 3.70078 4.70627C3.13359 5.25968 2.6805 5.91901 2.36719 6.64689C2.04141 7.40392 1.875 8.20783 1.875 9.03517C1.875 9.81564 2.03438 10.6289 2.35078 11.4563C2.61563 12.1477 2.99531 12.8649 3.48047 13.5891C4.24922 14.7352 5.30625 15.9305 6.61875 17.1422C8.79375 19.1508 10.9477 20.5383 11.0391 20.5945L11.5945 20.9508C11.8406 21.1078 12.157 21.1078 12.4031 20.9508L12.9586 20.5945C13.05 20.536 15.2016 19.1508 17.3789 17.1422C18.6914 15.9305 19.7484 14.7352 20.5172 13.5891C21.0023 12.8649 21.3844 12.1477 21.6469 11.4563C21.9633 10.6289 22.1227 9.81564 22.1227 9.03517C22.125 8.20783 21.9586 7.40392 21.6328 6.64689ZM12 19.0969C12 19.0969 3.65625 13.7508 3.65625 9.03517C3.65625 6.64689 5.63203 4.71095 8.06953 4.71095C9.78281 4.71095 11.2688 5.6672 12 7.06408C12.7312 5.6672 14.2172 4.71095 15.9305 4.71095C18.368 4.71095 20.3438 6.64689 20.3438 9.03517C20.3438 13.7508 12 19.0969 12 19.0969Z"
                  fill="#8C8C8C"
                />
              </svg>
              <svg
                width={2}
                height={38}
                viewBox="0 0 2 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="self-stretch flex-grow-0 flex-shrink-0"
                preserveAspectRatio="none"
              >
                <path d="M1 0V38" stroke="#EEEEEE" />
              </svg>
              <div className="flex flex-col justify-start items-start flex-grow relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">360,000원</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs font-bold text-left text-[#8c8c8c]">가격 제안 불가</p>
              </div>
            </div>
            <Link href="/chat">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-2 rounded bg-[#ff7e36]">
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">채팅하기</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full">
      <ProductDetailHeader></ProductDetailHeader>
      {children}
      <ProductDetailFooter data={product}></ProductDetailFooter>
    </div>
  );
}

