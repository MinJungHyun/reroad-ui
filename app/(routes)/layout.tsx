import 'remixicon/fonts/remixicon.css';
import { FooterMain } from '@/components/layout/FooterMain';
import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import { AuthProvider } from '@/store/AuthProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <body className="bg-slate-200">
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <AuthProvider>
          <div className="w-full h-full flex items-center justify-center ">
            <div className="max-w-[420px] w-full h-full flex flex-col bg-slate-100">{children}</div>
            <FooterMain />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

