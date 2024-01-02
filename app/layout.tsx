import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './components/nav';
import Toast from './components/toast';
import { Suspense } from 'react';

export const metadata = {
  title: 'GG-dashboard',
  description:
    ''
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#453D3B09]">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
