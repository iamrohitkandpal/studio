import type {Metadata} from 'next';
import { Outfit, Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/custom-cursor';
import { cn } from '@/lib/utils';

// Define fonts with specific weights and subsets
const fontOutfit = Outfit({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-heading', // CSS variable for headings
});

const fontInter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body', // CSS variable for body and subheadings
});

const fontManrope = Manrope({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-caption', // CSS variable for captions
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      {/* Apply font variables to the body */}
      <body
       className={cn(
          "antialiased relative",
          fontOutfit.variable,
          fontInter.variable,
          fontManrope.variable,
          "font-body" // Set Inter as the default body font via Tailwind class
        )}
       >
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
