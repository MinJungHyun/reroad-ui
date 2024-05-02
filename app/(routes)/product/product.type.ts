export interface IProduct {
  id: number;
  name: string;
  location: string;
  time: string;
  price: string;
  images: IProductImage[];
  chatCount: number;
  likeCount: number;

  createdBy?: IUser;
}
interface IProductImage {
  url: string;
}
interface IUser {
  id: number;
  name: string;
}
