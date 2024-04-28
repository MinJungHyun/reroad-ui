import NextTopLoader from "nextjs-toploader";

import { FooterMain } from "@/components/layout/FooterMain";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "@/components/ui/sonner";

import "remixicon/fonts/remixicon.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className="bg-slate-200">
        <NextTopLoader
          color="#004EFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #004EFF,0 0 5px #004EFF"
        />
        <AuthProvider>
          <div className="w-full h-full flex items-center justify-center ">
            <div className="max-w-[420px] w-full h-full flex flex-col bg-slate-100">
              {children}
            </div>
            <FooterMain />
          </div>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
