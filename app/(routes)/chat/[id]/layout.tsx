import api from '@/hooks/axios';
import { IChatInfo } from './chat.type';
import ChatHeader from './components/chat-header';

interface Props {
  children: React.ReactNode;
  params: { id: string };
}

export default async function ChatDetailLayout({ children, params }: Props) {
  const { id } = params;
  const res = await api.get(`/chat/${id}/info`);
  const chat = res.data;
  const chatInfo: IChatInfo = {
    id: chat.id,
    user: chat.product?.createdBy,
    product: chat.product
  };

  return (
    <div className="w-full">
      <ChatHeader data={chatInfo} />
      {children}
    </div>
  );
}

