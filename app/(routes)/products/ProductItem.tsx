import Image from 'next/image';
import Link from 'next/link';
import { IconChat, IconHeart } from '@/components/icon';
import { IProduct } from '@/util/dummyProduct';

const parseToWon = (price: number | string): string => {
  const _price = typeof price === 'string' ? parseInt(price) : price;
  const comma = (v: number) => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (_price < 10000) {
    // comma
    return comma(_price).concat('원');
  } else {
    // 1만원 이상
    if (_price % 10000 === 0) {
      return comma(_price / 10000).concat('만원');
    } else {
      return '약 ' + comma(_price / 10000).concat('만원');
    }
  }
};

export function ProductItem({ id, images, name, location, price, chatCount, likeCount, createdBy }: IProduct) {
  const image: string = images[0]?.['url'] as string;
  const userName: string = createdBy?.name as string;

  return (
    <div className="pt-4 w-full">
      <Link
        href={`/product/${id}`}
        key={id}
        onMouseUp={(e) => {
          console.log('@@@@', e);
          e.preventDefault();
          e.currentTarget.blur();
        }}
      >
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          {image ? (
            <Image
              src={`${image}`}
              alt={name}
              width={110}
              height={110}
              className="flex-grow-0 flex-shrink-0 w-[110px] h-[110px] rounded"
            />
          ) : (
            <img src="/no-image.png" alt="no-image" className="flex-grow-0 flex-shrink-0 w-[110px] h-[110px] rounded" />
          )}
          <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
              <p className="flex-grow-0 flex-shrink-0 w-[220px] text-base text-left text-black">{name}</p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{userName}</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">26초 전</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#ff7e36]">{parseToWon(price)}</p>
            </div>

            <div className="flex justify-end items-center self-stretch flex-grow-0 flex-shrink-0 gap-2">
              {chatCount > 0 && (
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                  <IconChat className="text-[#8c8c8c]" />
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{chatCount}</p>
                </div>
              )}
              {likeCount > 0 && (
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-0.5">
                  <IconHeart className="text-[#8c8c8c]" />
                  <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{likeCount}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

