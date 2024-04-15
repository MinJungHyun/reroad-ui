/* eslint-disable sonarjs/no-duplicate-string */
export interface IProduct {
  id: number;
  title: string;
  location: string;
  time: string;
  price: string;
  image: string;
  chatCount: number;
  likeCount: number;
}

export const dummyProduct: IProduct[] = [
  {
    id: 1,
    title: "에어팟 프로",
    location: "군자동",
    time: "3일 전",
    price: "220,000원",
    image: "/product/product1.png",
    chatCount: 3,
    likeCount: 0,
  },
  {
    id: 2,
    title: "바이레도 블랑쉬 50ml",
    location: "광진구 구의제3동",
    time: "26초 전",
    price: "4,000원",
    image: "/product/product2.png",
    chatCount: 0,
    likeCount: 5,
  },
  {
    id: 3,
    title: "샌드위치",
    location: "동대문구 휘경동",
    time: "끌올 59초 전",
    price: "8,000원",
    image: "/product/product3.png",
    chatCount: 3,
    likeCount: 5,
  },
  {
    id: 4,
    title: "아이폰 13프로맥스",
    location: "군자동",
    time: "1일 전",
    price: "1,000,000원",
    image: "/product/product4.png",
    chatCount: 100,
    likeCount: 0,
  },
  {
    id: 5,
    title: "커피머신",
    location: "구리시 교문1동",
    time: "1초 전",
    price: "...",
    image: "/product/product3.png",
    chatCount: 0,
    likeCount: 200,
  },
  {
    id: 6,
    title: "커피머신",
    location: "구리시 교문1동",
    time: "1초 전",
    price: "...",
    image: "/product/product3.png",
    chatCount: 0,
    likeCount: 200,
  },
  {
    id: 7,
    title: "커피머신",
    location: "구리시 교문1동",
    time: "1초 전",
    price: "...",
    image: "/product/product3.png",
    chatCount: 0,
    likeCount: 200,
  },
  {
    id: 8,
    title: "커피머신",
    location: "구리시 교문1동",
    time: "1초 전",
    price: "...",
    image: "/product/product3.png",
    chatCount: 0,
    likeCount: 200,
  },
  {
    id: 9,
    title: "커피머신",
    location: "구리시 교문1동",
    time: "1초 전",
    price: "...",
    image: "/product/product3.png",
    chatCount: 0,
    likeCount: 200,
  },
  {
    id: 10,
    title: "커피머신",
    location: "구리시 교문1동",
    time: "1초 전",
    price: "...",
    image: "/product/product3.png",
    chatCount: 0,
    likeCount: 200,
  },
];
