import { Divider } from '@/components/hr';
import api from '@/hooks/axios';
import ImageSwiper from './components/image-swiper';

interface Props {
  params: { id: number };
}
interface ICategory {
  id: number;
  name: string;
}
interface IProductImage {
  id: number;
  url: string;
  productId: number;
}
interface IUser {
  id: number;
  name: string;
  image: string;
}
interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  viewCount: number;
  chatCount: number;
  likeCount: number;
  isHidden: boolean;
  hideAt: Date | null;
  deletedAt: Date | null;
  transactionType: 'SALE';
  transactionState: 'ONGOING';
  completedAt: Date | null;
  categoryId: number;
  brandId?: number;
  createdById: number;

  createdBy: IUser;
  images: IProductImage[];
  category: ICategory;
}
export interface IProductProps {
  data?: IProduct | null;
}

export default async function ProductDetail({ params: { id } }: Props) {
  const res = await api.get(`/product/${id}`);
  // const product: IProduct | null = dummyProduct?.find((prod) => prod.id === Number(id)) || null;
  const { data } = res;
  const product: IProduct | null = data;
  console.log('@@@@', product);

  const images = product?.images.map((e) => e.url) || [];
  const images2 = [...images, ...images, ...images, ...images, ...images];
  if (!product) return <div>상품이 없습니다.</div>;
  return (
    <div className="w-full relative overflow-hidden bg-white">
      {images.length > 0 && <ImageSwiper images={images2} />}

      <div className="flex flex-col justify-start items-center max-w-[420px]  ">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-4 ">
          <div className="flex justify-start items-center self-stretch flex-0 relative gap-2">
            <img src={product?.createdBy.image} alt="profile" className="w-10 h-10 rounded-full" />

            <div className="flex flex-col justify-center items-start flex-grow h-10 relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">{product?.createdBy.name}</p>
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
              <p className="flex-0 text-lg font-bold  ">{product.name}</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-0.5 text-xs text-[#8c8c8c]">
                <p>{product.category.name}</p>
                <p>·</p>
                <p>끌올 1일 전</p>
              </div>
            </div>
            <p className="self-stretch flex-grow-0 flex-shrink-0 w-[358px] text-sm text-left text-black">{product.description}</p>
            <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5 text-xs text-[#8c8c8c]">
              <p>관심 {product.likeCount}</p>
              <p>·</p>
              <p>조회 {product.viewCount}</p>
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
            <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-black">
              {product.createdBy.name}님의 판매 상품
            </p>
            <div className="flex-grow-0 flex-shrink-0 w-3 h-3">
              <div className="w-3 h-3 absolute left-[345.5px] top-[3.5px] object-contain">
                <i className="ri-arrow-right-s-line text-black" />
              </div>
            </div>
          </div>
          {/* <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[178px] gap-4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

