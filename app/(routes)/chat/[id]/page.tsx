'use client';
import { IProduct } from '~/util/dummy_product';

interface Props {
  params: { id: number };
}

export interface IProductProps {
  data?: IProduct | null;
}

export default function ChatDetail({ params: { id } }: Props) {
  return <div className="w-full relative overflow-hidden bg-white"></div>;
}

