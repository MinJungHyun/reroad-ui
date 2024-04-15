import { create } from "zustand";

enum FooterMode {
  MAIN = "MAIN",
  PRODUCT = "PRODUCT",
  CHAT = "CHAT",
  MYPAGE = "MYPAGE",
}

interface FooterLayout {
  mode: FooterMode;
  changeProduct: () => void;
  changeChat: () => void;
  changeMypage: () => void;
  changeMain: () => void;
}

export const useFooterLayout = create<FooterLayout>((set) => ({
  mode: FooterMode.MAIN,
  changeProduct: () => set({ mode: FooterMode.PRODUCT }),
  changeChat: () => set({ mode: FooterMode.CHAT }),
  changeMypage: () => set({ mode: FooterMode.MYPAGE }),
  changeMain: () => set({ mode: FooterMode.MAIN }),
}));
