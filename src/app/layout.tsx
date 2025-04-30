
import type { Metadata } from 'next';
// Use Google Fonts that match the suggestions
import { Inter, Manrope, Outfit, Source_Code_Pro } from 'next/font/google';
// Assuming Neue Montreal is loaded via @font-face or similar, just define the variable
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

// Define fonts with specific weights and subsets available via Google Fonts
const fontOutfit = Outfit({ // Heading font
  subsets: ['latin'],
  weight: ['600', '700'], // Semi-bold, Bold
  variable: '--font-heading', // CSS variable for headings
});

// Define CSS variable for Neue Montreal, assuming it's loaded elsewhere
// If not loaded, Tailwind will fall back to sans-serif.
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

// Example mono font (optional, if needed for code blocks etc.)
const fontSourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
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
    // Apply dark mode directly to HTML tag and remove scroll-smooth (using CSS instead)
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
         {/* Preconnect to Google Fonts for faster loading */}
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         {/* Preconnect to placeholder image domain if known and different */}
         <link rel="preconnect" href="https://picsum.photos" />
      </head>
      {/* Apply font variables directly to the body using cn */}
      <body
       className={cn(
          "antialiased relative font-body", // Set default font-body
          fontOutfit.variable,
          fontNeueMontrealVariable.variable, // Apply subheading variable
          fontInter.variable,
          fontManrope.variable,
          fontSourceCodePro.variable // Add mono font variable if used
        )}
       >
         {children}
        <Toaster />
      </body>
    </html>
  );
}
