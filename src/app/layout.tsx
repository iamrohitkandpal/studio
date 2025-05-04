import type {Metadata} from 'next';
import { Inter, Manrope, Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CustomCursor from '@/components/custom-cursor';
import StarfieldCanvas from '@/components/starfield-canvas';

// Define fonts with specific weights and subsets available via Google Fonts
const fontOutfit = Outfit({ // Use Outfit for headings
  subsets: ['latin'],
  weight: ['600', '700'], // Semi-bold, Bold
  variable: '--font-heading', // CSS variable for headings
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
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-body antialiased',
        fontOutfit.variable,
        fontManrope.variable,
        fontInter.variable
      )}>
        <StarfieldCanvas />
        <CustomCursor />
        <Navbar />
        <main className="container mx-auto px-4 pt-20 pb-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
