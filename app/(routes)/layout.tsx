import "remixicon/fonts/remixicon.css";
import { FooterMain } from "@/components/layout/FooterMain";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      <body className="bg-slate-200">
        <div className="w-full h-full flex items-center justify-center ">
          <div className="max-w-[420px] w-full h-full flex flex-col bg-green-200">
            {children}
          </div>
          <FooterMain></FooterMain>
        </div>
      </body>
    </html>
  );
}
