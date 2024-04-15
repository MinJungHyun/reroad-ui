"use client";
import { usePathname } from "next/navigation";
import { Divider } from "../components/hr";
import { FooterMenu } from "../components/menu";

import "remixicon/fonts/remixicon.css";
import "./globals.css";

const MainFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0  max-w-[420px] min-w-[320px] w-full mx-auto">
      <div className="flex justify-start items-start py-2 w-full  bg-white  border-t border-solid border-top-1 border-gray-300">
        <FooterMenu />

        {/* Floating Button */}
        <div className="absolute bottom-[82px] right-[16px] flex flex-row justify-center w-[48px] h-[48px] box-sizing-border">
          <div className="shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] rounded-[100px] bg-[#FF7E36] flex flex-row justify-center p-[12px_12px_12px_12px] w-[48px] h-[48px] box-sizing-border">
            <i className="ri-arrow-right-s-line text-black"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const excludeFooterPath = ["/product/", "/chat/", "/mypage/"];
  const isFooter = excludeFooterPath.every((path) => !pathname.includes(path));

  return (
    <html lang="kr">
      <body className="bg-slate-200">
        <div className="w-full h-full flex items-center justify-center ">
          <div className="max-w-[420px] w-full h-full flex flex-col bg-green-200">
            {children}
          </div>
          {isFooter && <MainFooter></MainFooter>}
        </div>
      </body>
    </html>
  );
}
