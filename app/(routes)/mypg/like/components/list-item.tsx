import Image from 'next/image';
import Link from 'next/link';
import { IconChat, IconHeart, IconHeartFill } from '@/components/icon';
import { IProduct } from '@/(routes)/product/product.type';

export function LikeItem({ id, images, name, location, price, chatCount, likeCount }: IProduct) {
  const image: string = images[0]?.['url'] as string;
  return (
    <div className="pt-4 w-full">
      <Link href={`/product/${id}`} key={id}>
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
          <Image
            src={`${image}`}
            alt={name}
            width={110}
            height={110}
            objectFit="cover"
            className="flex-grow-0 flex-shrink-0 w-[110px] h-[110px] rounded"
          />
          <div className="flex flex-col justify-start items-start self-stretch flex-grow gap-1">
            <div className="flex flex-col justify-start items-start flex-grow relative gap-1">
              <div className="flex flex-row justify-between">
                <p className="flex-grow-0 flex-shrink-0 w-[232px] text-base text-left text-black">{name}</p>
                <IconHeartFill className="text-2xl text-[#dd0000]"></IconHeartFill>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1">
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">{location}</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">·</p>
                <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-[#8c8c8c]">26초 전</p>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-[15px] font-bold text-left text-[#ff7e36]">{price}</p>
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

