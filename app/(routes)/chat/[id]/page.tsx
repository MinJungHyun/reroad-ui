import ChatSocket from './components/chat-socket';
interface Props {
  params: { id: string };
}

export default async function Chat2Detail({ params: { id } }: Props) {
  return (
    <>
      <ChatSocket room={id} />
    </>
  );
}
