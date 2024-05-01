import { MessageType } from '../chat/[id]/chat.type';

export interface IChatListItem {
  chatId: number;
  message: string;
  messageType: MessageType;
  messageAt: Date;
  userName: string;
  userImage: string;
  productImage: string;
  productName: string;
}
