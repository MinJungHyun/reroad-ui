import Link from 'next/link';
import { IconLeft, IconMore } from '@/components/icon';
import { HeaderFixed } from '@/components/layout/HeaderFixed';
import { IChatDummy, dummyChats } from '@/util/dummyChat';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import api from '@/hooks/axios';
import { IChatInfo } from './chat.type';

export interface IChatProps {
  data: IChatInfo | null;
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
          <div className="flex gap-1 text-sm">{data?.user.name}</div>
          <div className="flex gap-1 text-xs">방해금지 시간이예요</div>
        </div>
        <div className="flex-0 flex gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="outline" className="h-8 w-8 border-0">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </HeaderFixed>
  );
}

function ChatInputContainer() {
  return null;
}

export default async function ChatDetailLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const { id } = params;
  const res = await api.get(`/chat/i/${id}`);
  const chat = res.data;
  const chatInfo: IChatInfo = {
    id: chat.id,
    user: chat.product?.createdBy,
    product: chat.product
  };

  return (
    <div className="w-full">
      <ChatDetailHeader data={chatInfo} />
      {children}
      <ChatInputContainer />
    </div>
  );
}

