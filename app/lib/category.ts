interface Category {
  id: number;
  name: string;
  textIndent?: boolean;
}
export const categories: Category[] = [
  {
    id: 110,
    name: "자전거",
  },
  {
    id: 111,
    name: "· 완차",
    textIndent: true,
  },
  {
    id: 112,
    name: "· 반차",
    textIndent: true,
  },
  {
    id: 113,
    name: "· 프레임셋",
    textIndent: true,
  },

  {
    id: 120,
    name: "휠셋",
  },
  {
    id: 130,
    name: "구동계",
  },
  {
    id: 140,
    name: "컴포넌트",
  },
  {
    id: 150,
    name: "용품",
  },
  {
    id: 160,
    name: "패션",
  },
  {
    id: 170,
    name: "기타",
  },
];
