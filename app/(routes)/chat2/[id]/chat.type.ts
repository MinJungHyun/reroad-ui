import { IUserInfo } from '@/hooks/useAuth';
import { IProduct } from '@/util/dummyProduct';

export enum MessageType {
  STRING = 'STRING',
  IMAGE = 'IMAGE'
}
export interface IChatMessage {
  id: number;
  chatId: number;
  userId: number;
  message: string;
  type: MessageType;
  createdAt: Date;
}

export interface IChatInfo {
  id: number;
  user: IUserInfo;
  product: IProduct;
}
