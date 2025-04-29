
import type {Metadata} from 'next';
// Use Google Fonts that are close to the suggestion
import { Inter, Manrope, Outfit } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
// import CustomCursor from '@/components/custom-cursor'; // Removed
import { cn } from '@/lib/utils';

// Define fonts with specific weights and subsets available via Google Fonts
const fontOutfit = Outfit({ // Use Outfit for headings (alternative to Satoshi)
  subsets: ['latin'],
  weight: ['600', '700'], // Semi-bold, Bold
  variable: '--font-heading', // CSS variable for headings
});

const fontInter = Inter({ // Keep Inter for body text (alternative to General Sans)
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Regular, Medium, Semi-bold (covers Subheadings too)
  variable: '--font-body', // CSS variable for body text
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
          fontOutfit.variable,
          fontInter.variable,
          fontManrope.variable,
          "font-body" // Set Inter as the default body font via Tailwind class
        )}
       >
        {/* <CustomCursor /> */} {/* Removed */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
