import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import Head from 'next/head';

import '@/common/styles/globals.scss';

// import { firaCode, jakartaSans, soraSans } from '@/common/styles/fonts';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '墨綠B.G. | 個人部落格',
  description: '歡迎來到我的屍魂界',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      {/* <Head>
        <style>
          {`
            html {
              --jakartaSans-font: ${jakartaSans.style.fontFamily};
              --soraSans-font: ${soraSans.style.fontFamily};
              --firaCode-font: ${firaCode.style.fontFamily};
            }
          `}
        </style>
      </Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
