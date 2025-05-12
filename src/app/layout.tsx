import type {Metadata} from 'next';
import { Inter, Outfit, Manrope } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CustomCursor from '@/components/custom-cursor';
import StarfieldCanvas from '@/components/starfield-canvas';

// Optimize font loading
const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  preload: true
});

const fontManrope = Manrope({ // Use Manrope for body text
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Regular, Medium, Semi-bold
  variable: '--font-body', // CSS variable for body text
});

const fontInter = Inter({ // Use Inter for UI elements
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Regular, Medium, Semi-bold
  variable: '--font-ui', // CSS variable for UI elements
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Portfolio Studio',
  description: 'A modern portfolio showcasing my skills and projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Add preloads for critical resources */}
        <link 
          rel="preload" 
          href="/fonts/inter.woff2" 
          as="font" 
          type="font/woff2" 
          crossOrigin="anonymous" 
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={cn(
        'min-h-screen bg-background font-body antialiased',
        outfit.variable,
        fontManrope.variable,
        fontInter.variable
      )}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground p-4 z-50 rounded">
          Skip to main content
        </a>
        <StarfieldCanvas />
        <CustomCursor />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="container mx-auto px-4 pt-20 pb-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
