interface IProductImage {
  url: string;
}

interface IUser {
  id: number;
  name: string;
}
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

export const dummyProduct: IProduct[] = [
  {
    id: 1,
    name: '에어팟 프로',
    location: '군자동',
    time: '3일 전',
    price: '220,000원',
    images: [{ url: '/product/product1.png' }],
    chatCount: 3,
    likeCount: 0
  },
  {
    id: 2,
    name: '바이레도 블랑쉬 50ml',
    location: '광진구 구의제3동',
    time: '26초 전',
    price: '4,000원',
    images: [{ url: '/product/product2.png' }],
    chatCount: 0,
    likeCount: 5
  },
  {
    id: 3,
    name: '샌드위치',
    location: '동대문구 휘경동',
    time: '끌올 59초 전',
    price: '8,000원',
    images: [{ url: '/product/product3.png' }],
    chatCount: 3,
    likeCount: 5
  },
  {
    id: 4,
    name: '아이폰 13프로맥스',
    location: '군자동',
    time: '1일 전',
    price: '1,000,000원',
    images: [{ url: '/product/product4.png' }],
    chatCount: 100,
    likeCount: 0
  },
  {
    id: 5,
    name: '커피머신',
    location: '구리시 교문1동',
    time: '1초 전',
    price: '...',
    images: [{ url: '/product/product3.png' }],
    chatCount: 0,
    likeCount: 200
  },
  {
    id: 6,
    name: '커피머신',
    location: '구리시 교문1동',
    time: '1초 전',
    price: '...',
    images: [{ url: '/product/product3.png' }],
    chatCount: 0,
    likeCount: 200
  },
  {
    id: 7,
    name: '커피머신',
    location: '구리시 교문1동',
    time: '1초 전',
    price: '...',
    images: [{ url: '/product/product3.png' }],
    chatCount: 0,
    likeCount: 200
  },
  {
    id: 8,
    name: '커피머신',
    location: '구리시 교문1동',
    time: '1초 전',
    price: '...',
    images: [{ url: '/product/product3.png' }],
    chatCount: 0,
    likeCount: 200
  },
  {
    id: 9,
    name: '커피머신',
    location: '구리시 교문1동',
    time: '1초 전',
    price: '...',
    images: [{ url: '/product/product3.png' }],
    chatCount: 0,
    likeCount: 200
  },
  {
    id: 10,
    name: '커피머신',
    location: '구리시 교문1동',
    time: '1초 전',
    price: '...',
    images: [{ url: '/product/product3.png' }],
    chatCount: 0,
    likeCount: 200
  }
];

