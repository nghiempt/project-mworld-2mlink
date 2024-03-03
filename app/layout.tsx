import React from "react";
import ThemeRegistry from "@/theme/theme-registry";
import "./globals.css";
import { Montserrat } from "next/font/google";
import ProvidersContext from "@/context/providers-context";
import { GoogleAnalytics } from '@next/third-parties/google'

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Truyện Sex Link",
  description: "Truyện sex hay mỗi ngày | Đọc càng nhiều, đụ càng giỏi! - SexLink.Online",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="vi">
      <GoogleAnalytics gaId="G-Y7Z935T8GP" />
      <ThemeRegistry>
        <body className={montserrat.className}>
          <ProvidersContext>{children}</ProvidersContext>
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
