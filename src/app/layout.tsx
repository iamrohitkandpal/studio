import type { Metadata } from 'next';
import { Inter, Manrope, Outfit } from 'next/font/google';
// Removed Geist Sans/Mono imports as they were causing errors and Inter/Manrope/Outfit are used.
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

// Define fonts with specific weights and subsets available via Google Fonts
const fontOutfit = Outfit({ // Heading font
  subsets: ['latin'],
  weight: ['600', '700'], // Use specific weights needed
  display: 'swap', // Use swap for better performance
  variable: '--font-heading',
});

// Removed Neue Montreal variable - If needed, ensure it's loaded via @font-face
// const fontNeueMontrealVariable = { variable: '--font-subheading' };

const fontInter = Inter({ // Body font
  subsets: ['latin'],
  weight: ['400', '500'], // Use specific weights needed
  display: 'swap',
  variable: '--font-body',
});

const fontManrope = Manrope({ // Caption font
  subsets: ['latin'],
  weight: ['400'], // Use specific weights needed
  display: 'swap',
  variable: '--font-caption',
});

// Removed Source Code Pro as it wasn't used.

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
      <head>
         {/* Preconnect to Google Fonts is handled automatically by next/font */}
         {/* Preconnect to placeholder image domain */}
         <link rel="preconnect" href="https://picsum.photos" />
         {/* Add preload hints for fonts if needed, though next/font often handles this */}
         {/* Example: <link rel="preload" href="/fonts/outfit-v11-latin-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /> */}
      </head>
      <body
       className={cn(
          "antialiased relative font-body",
          fontOutfit.variable,
          // fontNeueMontrealVariable.variable, // Removed if not loaded elsewhere
          fontInter.variable,
          fontManrope.variable,
          // fontSourceCodePro.variable // Removed if not used
        )}
       >
         {children}
        <Toaster />
      </body>
    </html>
  );
}
