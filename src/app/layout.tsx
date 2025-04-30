
import type { Metadata } from 'next';
// Use Google Fonts that match the suggestions
import { Inter, Manrope, Outfit, Source_Code_Pro } from 'next/font/google';
// Assuming General Sans is loaded via @font-face or similar if not on Google Fonts
// If using Google Fonts, replace 'General Sans' path as needed
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import CustomCursor from '@/components/custom-cursor'; // Import CustomCursor

// Define fonts with specific weights and subsets available via Google Fonts
const fontOutfit = Outfit({ // Heading font
  subsets: ['latin'],
  weight: ['600', '700'], // Semi-bold, Bold
  variable: '--font-heading', // CSS variable for headings
});

// Define CSS variable for General Sans (Subheading)
// If loading locally via @font-face, ensure the font-family name matches.
// This definition just sets the CSS variable.
const fontGeneralSansVariable = { variable: '--font-subheading' };

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

const fontSourceCodePro = Source_Code_Pro({ // Mono font
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
         {/* Preconnect to Google Fonts */}
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
         {/* Add link for General Sans if loading from CDN/Google Fonts */}
         {/* Example: <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600&display=swap" rel="stylesheet"> */}
         <style>{`
            /* If loading General Sans locally */
            @font-face {
              font-family: 'General Sans';
              src: url('/fonts/GeneralSans-Medium.woff2') format('woff2'); /* Adjust path */
              font-weight: 500;
              font-style: normal;
              font-display: swap;
            }
            @font-face {
              font-family: 'General Sans';
              src: url('/fonts/GeneralSans-Semibold.woff2') format('woff2'); /* Adjust path */
              font-weight: 600;
              font-style: normal;
              font-display: swap;
            }
         `}</style>
         <link rel="preconnect" href="https://picsum.photos" />
      </head>
      <body
       className={cn(
          "antialiased relative font-body", // Set default font-body
          fontOutfit.variable,
          fontGeneralSansVariable.variable, // Apply subheading variable
          fontInter.variable,
          fontManrope.variable,
          fontSourceCodePro.variable // Add mono font variable
        )}
       >
         <CustomCursor /> {/* Add the custom cursor component */}
         {children}
        <Toaster />
      </body>
    </html>
  );
}
