import type {Metadata} from 'next';
import { Satoshi, Neue_Montreal, Inter, General_Sans, Manrope } from 'next/font/google'; // Add Satoshi, Neue Montreal, General Sans
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import CustomCursor from '@/components/custom-cursor';
import { cn } from '@/lib/utils';

// Define fonts with specific weights and subsets
const fontSatoshi = Satoshi({ // Added Satoshi
  subsets: ['latin'],
  weight: ['700', '900'], // Use appropriate weights (e.g., Bold, Black)
  variable: '--font-heading', // CSS variable for headings
});

const fontNeueMontreal = Neue_Montreal({ // Added Neue Montreal
  subsets: ['latin'],
  weight: ['500', '700'], // Medium, Bold
  variable: '--font-subheading', // CSS variable for subheadings
});

const fontInter = Inter({ // Keep Inter as a primary body font
  subsets: ['latin'],
  weight: ['400', '500'], // Regular, Medium
  variable: '--font-body', // CSS variable for body text
});

const fontGeneralSans = General_Sans({ // Added General Sans as alternative body
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body-alt', // Optional alternative body font variable
});


const fontManrope = Manrope({ // Keep Manrope for captions
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
    // Apply dark mode directly to HTML tag
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      {/* Apply font variables to the body */}
      <body
       className={cn(
          "antialiased relative",
          fontSatoshi.variable,
          fontNeueMontreal.variable,
          fontInter.variable,
          fontGeneralSans.variable, // Add variable if needed
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
