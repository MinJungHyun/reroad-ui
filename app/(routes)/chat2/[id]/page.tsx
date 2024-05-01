import ChatSocket from './ChatSocket';
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

