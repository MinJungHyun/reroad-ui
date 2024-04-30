import ChatSocket from './ChatSocket';
interface Props {
  params: { id: string };
}
interface IMessageItem {
  type: 'string' | 'image';
  message: string;
  room: string;
  userId: number;
}
export default async function Chat2Detail({ params: { id } }: Props) {
  return (
    <div>
      <ChatSocket room={id} />
    </div>
  );
}

