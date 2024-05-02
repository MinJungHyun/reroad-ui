'use client';
import api from '@/hooks/axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function ButtonChat({ productId }: { productId: number }) {
  const router = useRouter();
  const handleStartChat = () => {
    api.get(`/chat/p/${productId}`).then((res) => {
      const chatId = res?.data?.chatId || 0;
      if (chatId === 0) {
        toast.error('잘못된 오류 입니다.', { duration: 800 });
      } else {
        router.push(`/chat/${chatId}`);
      }
    });
  };
  return (
    <div onClick={handleStartChat}>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-2 rounded bg-[#ff7e36]">
        <p className="flex-grow-0 flex-shrink-0 text-sm font-bold text-left text-white">채팅하기</p>
      </div>
    </div>
  );
}

