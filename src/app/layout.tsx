import { ReactNode } from 'react';
import Header from 'components/Header';
import { satoshi } from 'config/fonts';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
