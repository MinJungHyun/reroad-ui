'use client';
import { usePathname } from 'next/navigation';
import 'remixicon/fonts/remixicon.css';
import { Divider } from '../components/hr';
import { FooterMenu } from '../components/menu';
import './globals.css';

const MainFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0  max-w-[420px] min-w-[320px] w-full mx-auto">
      <div className="flex justify-start items-start py-2 w-full  bg-white  border-t border-solid border-top-1 border-gray-300">
        <FooterMenu />
      </div>
    </div>
  );
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const excludeFooterPath = ['/product/', '/chat/', '/mypage/'];
  const isFooter = excludeFooterPath.every((path) => !pathname.includes(path));

  return (
    <html lang="kr">
      <body className="bg-slate-200">
        <div className="w-full h-full flex items-center justify-center ">
          <div className="max-w-[420px] w-full h-full flex flex-col bg-green-200">{children}</div>
          {isFooter && <MainFooter></MainFooter>}
        </div>
      </body>
    </html>
  );
}

