'use client';
import { Divider } from '~/components/hr';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import 'remixicon/fonts/remixicon.css';
import './globals.css';
import { FooterMenu } from '~/components/menu';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const MainFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex flex-col justify-center items-center max-w-[420px] min-w-[320px] w-full mx-auto">
      <div className="flex justify-end items-start self-stretch flex-grow-0 flex-shrink-0 gap-2.5 p-4">
        <div
          className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5 p-3 rounded-[100px] bg-[#ff7e36]"
          style={{ boxShadow: '0px 4px 12px 0 rgba(0,0,0,0.12)' }}
        >
          <i className="ri-add-line text-2xl flex-grow-0 flex-shrink-0 w-6 h-6 object-contain"></i>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative  w-full ">
        <Divider />
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0  py-2 bg-white  w-full ">
          <FooterMenu />
        </div>
      </div>
    </div>
  );
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const excludeFooterPath = ['/product/', '/chat/', '/mypage/'];
  const isFooter = excludeFooterPath.every((path) => !pathname.includes(path));

  let queryClient = new QueryClient(); //캐시와 훅을 쓸수있게 정의
  return (
    <html lang="kr">
      <body>
        {/* <AuthProvider> */}
        <QueryClientProvider client={queryClient}>
          <div className="w-full flex items-center justify-center bg-slate-200">
            <div className="max-w-[420px] w-full h-full flex items-center bg-green-200 ">{children}</div>
            {isFooter && <MainFooter></MainFooter>}
          </div>
        </QueryClientProvider>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}

