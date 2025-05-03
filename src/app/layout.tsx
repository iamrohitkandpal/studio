
import type {Metadata} from 'next';
import { Inter, Manrope, Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

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

export const metadata: Metadata = {
  title: 'Rohit Kandpal | Portfolio',
  description: 'Full-Stack Developer & Cybersecurity Enthusiast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen antialiased",
        fontOutfit.variable, // Apply heading font
        fontManrope.variable, // Apply body font
        fontInter.variable, // Apply UI font
        "font-body" // Default to body font
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
