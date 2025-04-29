
import type {Metadata} from 'next';
// Use Google Fonts that match the suggestions
import { Inter, Manrope, Outfit } from 'next/font/google';
// Assuming Neue Montreal is not on Google Fonts, it would need local setup or a fallback.
// Using Outfit for headings, Inter for body, Manrope for captions as before.
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
// import CustomCursor from '@/components/custom-cursor'; // Custom cursor removed as requested

// Define fonts with specific weights and subsets available via Google Fonts
const fontOutfit = Outfit({ // Heading font
  subsets: ['latin'],
  weight: ['600', '700'], // Semi-bold, Bold
  variable: '--font-heading', // CSS variable for headings
});

// Neue Montreal is not available via next/font/google.
// Define CSS variable for it, assuming it's loaded via @font-face in globals.css or similar.
// If not available, Tailwind will fall back to sans-serif.
const fontNeueMontrealVariable = { variable: '--font-subheading' }; // Placeholder variable definition

const fontInter = Inter({ // Body font
  subsets: ['latin'],
  weight: ['400', '500'], // Regular, Medium
  variable: '--font-body', // CSS variable for body text
});

const fontManrope = Manrope({ // Caption font
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
          fontNeueMontrealVariable.variable, // Apply subheading variable (might need fallback)
          fontInter.variable,
          fontManrope.variable,
          "font-body" // Set Inter as the default body font via Tailwind class
        )}
       >
        {/* <CustomCursor /> */} {/* Custom cursor removed */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
