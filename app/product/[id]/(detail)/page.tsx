'use client';
import { IProduct, dummy_products } from '@/util/dummy_product';
import Image from 'next/image';
interface Props {
  params: { id: number };
}

interface IProductProps {
  data?: IProduct | null;
}

export default function ProductDetail({ params: { id } }: Props) {
  const product: IProduct | null = dummy_products?.find((product) => product.id == Number(id)) || null;
  console.log('@@@@', id);
  console.log('@@@@', dummy_products);
  console.log('@@@@', product);
  const ProductArchive = ({ data }: IProductProps) => {};
  const ImageSlide = ({ data }: IProductProps) => {
    console.log('@@@@', 1);

    return (
      <div className="flex flex-col justify-start items-center  ">
        <div className="self-stretch flex-grow-0 flex-shrink-0 h-[385px] relative overflow-hidden bg-white">
          <img src={data?.image} width={'100%'} style={{ position: 'absolute', left: 0, top: 0 }}></img>
          <div className="flex justify-between items-start w-[390px] absolute left-0 top-[47px] px-4 py-3.5">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
                <div className="w-6 h-6 absolute left-[0px] top-[0px]">
                  <i className="ri-arrow-left-s-line text-xl text-black"></i>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
                <div className="w-6 h-6 absolute left-[50px] top-[0px]">
                  <i className="ri-home-5-line text-xl text-black"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4">
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
                <div className="w-6 h-6 absolute left-[-0.5px] top-[-0.5px] object-contain">
                  <i className="ri-external-link-line text-xl text-black"></i>
                </div>
              </div>
              <div className="flex-grow-0 flex-shrink-0 w-6 h-6">
                <div className="w-6 h-6 absolute left-[63.5px] top-[-0.5p" />
                <i className="ri-more-2-fill text-xl text-black"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-[390px] absolute left-0 top-[347px] gap-2.5 p-4 bg-gradient-to-b from-black/0 to-black/60">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
            <svg
              width={6}
              height={6}
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle cx={3} cy={3} r={3} fill="white" />
            </svg>
            <svg
              width={6}
              height={6}
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 opacity-30"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle opacity="0.3" cx={3} cy={3} r={3} fill="white" />
            </svg>
            <svg
              width={6}
              height={6}
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 opacity-30"
              preserveAspectRatio="xMidYMid meet"
            >
              <circle opacity="0.3" cx={3} cy={3} r={3} fill="white" />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[390px] h-[1630px] relative overflow-hidden bg-white">
      <ImageSlide data={product} />

      <div className="flex flex-col justify-start items-center w-[390px] h-[1630px]  ">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-4 bg-white">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
            <div
              className="flex-grow-0 flex-shrink-0"
              style={{ backgroundImage: 'url(/public/product/sony-wh-1000xm5-silver.png)' }}
            />
            <div className="flex flex-col justify-center items-start flex-grow h-10 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">1성탐방러</p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#4f4f4f]">중랑구 면목동</p>
            </div>
            <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-1">
              <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                <div className="flex flex-col justify-start items-end flex-grow-0 flex-shrink-0 relative gap-0.5">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-[#4ac1db]">37.2°C</p>
                  <div className="self-stretch flex-grow-0 flex-shrink-0 h-0.5 relative overflow-hidden rounded-lg">
                    <div className="w-[46px] h-1 absolute left-[-1px] top-[-1px] bg-[#d9d9d9]" />
                    <div className="w-[22px] h-1 absolute left-[-1px] top-[-1px] bg-[#4ac1db]" />
                  </div>
                </div>
                <p className="flex-grow-0 flex-shrink-0 text-xl text-left text-[#4f4f4f]">🙂</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-[10px] text-left text-[#8c8c8c]">매너온도</p>
            </div>
          </div>
          <hr className="h-px my-1 bg-gray-700 border-1 dark:bg-gray-700 w-full" />
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
            <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
              <p className="flex-grow-0 flex-shrink-0 text-lg font-bold text-left text-black">소니 Wh-1000xm5 실버 팝니다.</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">디지털기기</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">끌올 1일 전</p>
              </div>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[358px] text-sm text-left text-black">
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[358px] text-sm text-left text-black">
                8/31일 해외직구한
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[358px] text-sm text-left text-black">
                한달도 안된제품 입니다.
              </span>
              <br />
              <span className="self-stretch flex-grow-0 flex-shrink-0 w-[358px] text-sm text-left text-black">
                박풀 S급입니다.
              </span>
            </p>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5">
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">관심 15</p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">조회 311</p>
            </div>
          </div>
          <hr className="h-px my-1 bg-gray-700 border-1 dark:bg-gray-700 w-full" />
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">이 게시글 신고하기</p>
            <div className="flex-grow-0 flex-shrink-0 w-3 h-3">
              <div className="w-3 h-3 absolute left-[345.5px] top-[3.5px] object-contain">
                <i className="ri-arrow-right-s-line text-black"></i>
              </div>
            </div>
          </div>
          <hr className="h-px my-1 bg-gray-700 border-1 dark:bg-gray-700 w-full" />
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">감성탐방러님의 판매 상품</p>
            <div className="flex-grow-0 flex-shrink-0 w-3 h-3">
              <div className="w-3 h-3 absolute left-[345.5px] top-[3.5px] object-contain">
                <i className="ri-arrow-right-s-line text-black"></i>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[178px] gap-4">
            <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
              <img className="self-stretch flex-grow rounded" src="rectangle-2.png" />
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">에어팟 미개봉</p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">240,000원</p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
              <img className="self-stretch flex-grow rounded" src="rectangle-3.png" />
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">닌텐도 스위치</p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">120,000원</p>
            </div>
          </div>
          <hr className="h-px my-1 bg-gray-700 border-1 dark:bg-gray-700 w-full" />
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">이 글과 함께 봤어요</p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[358px] gap-4">
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-2-2.png" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">에어팟 맥스 실버</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">550,000원</p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-3-2.png" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">닌텐도 스위치</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">120,000원</p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[358px] gap-4">
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-2-3.png" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">소니 헤드폰 블랙색상</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">240,000원</p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-3-3.png" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">급처) 맥북프로</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">130만원</p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[358px] gap-4">
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-2-4.png" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">소니 헤드폰 블랙색상</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">240,000원</p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-3-4.png" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">닌텐도 스위치</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">120,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center absolute left-0 top-[1542px]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative">
          <svg
            width={390}
            height={2}
            viewBox="0 0 390 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="self-stretch flex-grow-0 flex-shrink-0"
            preserveAspectRatio="none"
          >
            <path d="M0 1H390" stroke="#D9D9D9" />
          </svg>
          <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 w-[390px] gap-2 px-4 py-2 bg-white">
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
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-2 rounded bg-[#ff7e36]">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">채팅하기</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

