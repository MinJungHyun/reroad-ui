'use client';

import { Divider } from '@/components/hr';
import { IProduct, dummyProduct } from '@/util/dummyProduct';

interface Props {
  params: { id: number };
}

export interface IProductProps {
  data?: IProduct | null;
}

function ImageSlide({ data }: IProductProps) {
  const image: string = data?.images[0].url || '';
  return (
    <div className="flex flex-col justify-start items-center  ">
      <div className="self-stretch flex-grow-0 flex-shrink-0 h-[385px] relative overflow-hidden bg-white">
        <img src={image} width="100%" style={{ position: 'absolute', left: 0, top: 0 }} alt="product" />
      </div>
      <div className="flex flex-col justify-start items-center w-full absolute left-0 top-[347px] gap-2.5 p-4 bg-gradient-to-b from-black/0 to-black/60">
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
}

export default function ProductDetail({ params: { id } }: Props) {
  const product: IProduct | null = dummyProduct?.find((prod) => prod.id === Number(id)) || null;

  return (
    <div className="w-full relative overflow-hidden bg-white">
      <ImageSlide data={product} />

      <div className="flex flex-col justify-start items-center max-w-[420px] h-[1630px]  ">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-4 bg-white">
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
            <div
              className="flex-grow-0 flex-shrink-0"
              style={{
                backgroundImage: 'url(/public/product/sony-wh-1000xm5-silver.png)'
              }}
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
          <Divider />
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
          <Divider />
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">이 게시글 신고하기</p>
            <div className="flex-grow-0 flex-shrink-0 w-3 h-3">
              <div className="w-3 h-3 absolute left-[345.5px] top-[3.5px] object-contain">
                <i className="ri-arrow-right-s-line text-black" />
              </div>
            </div>
          </div>
          <Divider />
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative">
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">감성탐방러님의 판매 상품</p>
            <div className="flex-grow-0 flex-shrink-0 w-3 h-3">
              <div className="w-3 h-3 absolute left-[345.5px] top-[3.5px] object-contain">
                <i className="ri-arrow-right-s-line text-black" />
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[178px] gap-4">
            <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
              <img className="self-stretch flex-grow rounded" src="rectangle-2.png" alt="product" />
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">에어팟 미개봉</p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">240,000원</p>
            </div>
            <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
              <img className="self-stretch flex-grow rounded" src="rectangle-3.png" alt="product" />
              <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">닌텐도 스위치</p>
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">120,000원</p>
            </div>
          </div>
          <Divider />
          <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">이 글과 함께 봤어요</p>
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[358px] gap-4">
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-2-2.png" alt="product" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">에어팟 맥스 실버</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">550,000원</p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-3-2.png" alt="product" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">닌텐도 스위치</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">120,000원</p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[358px] gap-4">
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-2-3.png" alt="product" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">소니 헤드폰 블랙색상</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">240,000원</p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-3-3.png" alt="product" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">급처) 맥북프로</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">130만원</p>
              </div>
            </div>
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 w-[358px] gap-4">
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-2-4.png" alt="product" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">소니 헤드폰 블랙색상</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">240,000원</p>
              </div>
              <div className="flex flex-col justify-start items-start flex-grow h-[170px] relative gap-2">
                <img className="self-stretch flex-grow rounded" src="rectangle-3-4.png" alt="product" />
                <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-black">닌텐도 스위치</p>
                <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">120,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

