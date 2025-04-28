import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/custom-cursor';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rohit Kandpal | Portfolio',
  description: 'Portfolio of Rohit Navinchandra Kandpal, a B.Tech student in Computer Science & Engineering (Cyber Security).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className="dark">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
