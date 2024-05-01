import { IUserInfo } from '@/hooks/useAuth';
import { IProduct } from '@/util/dummyProduct';

export enum MessageType {
  STRING = 'STRING',
  IMAGE = 'IMAGE'
}
export interface IChatMessage {
  id: number;
  message: string;
  chatId: number;
  userId: number;
  type: MessageType;
  createdAt: Date;
}

export interface IChatInfo {
  id: number;
  user: IUserInfo;
  product: IProduct;
}

export interface ISendMessage {
  type: 'STRING' | 'IMAGE';
  message: string;
  room: string;
  userId: number;
}
