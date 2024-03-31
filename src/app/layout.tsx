import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import '@/common/styles/globals.scss';

import Layout from '@/common/components/layouts';
import GlobalStyles from '@/common/styles/GlobalStyles';

import StyledComponentsRegistry from '../common/libs/registry';

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
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <ThemeProvider attribute="class" defaultTheme="dark">
            <Layout>{children}</Layout>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
