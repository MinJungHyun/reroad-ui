import Link from 'next/link';
import { IconLeft, IconMore } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { IChat, dummyChats } from '@/util/dummyChat';

export interface IChatProps {
  data: IChat | null;
}

function ChatDetailHeader({ data }: IChatProps) {
  return (
    <HeaderFixed>
      <div className="w-full flex justify-between gap-4 h-7">
        <div className="flex-0 flex ">
          <Link href="/chats">
            <IconLeft />
          </Link>
        </div>
        <div className="flex-auto flex-row gap-4">
          <div className="flex gap-1 text-sm">{data?.name}</div>
          <div className="flex gap-1 text-xs">방해금지 시간이예요</div>
        </div>
        <div className="flex-0 flex gap-4">
          <div className="">
            <IconMore className="text-xl " />
          </div>
        </div>
      </div>
    </HeaderFixed>
  );
}

function ChatInputContainer() {
  return null;
}

export default function ChatDetailLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const { id } = params;
  const chat: IChat | null = dummyChats?.find((ct) => ct.id === Number(id)) || null;

  return (
    <div className="w-full">
      <ChatDetailHeader data={chat} />
      {children}
      <ChatInputContainer />
    </div>
  );
}

