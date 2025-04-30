
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'sans-serif'], // Use variable
        body: ['var(--font-body)', 'sans-serif'],
        caption: ['var(--font-caption)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
  		colors: {
        /* ChaiCode Inspired Dark Theme - Updated with Orange Accent */
        background: 'hsl(var(--background))', /* 230 15% 8% */
        foreground: 'hsl(var(--foreground))', /* 0 0% 98% */
        card: {
          DEFAULT: 'hsl(var(--card))', /* 230 15% 12% */
          foreground: 'hsl(var(--card-foreground))' /* 0 0% 98% */
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))', /* 230 15% 8% */
          foreground: 'hsl(var(--popover-foreground))' /* 0 0% 98% */
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))', /* 25 95% 55% - Vibrant Orange */
          foreground: 'hsl(var(--primary-foreground))' /* 230 15% 8% - Dark text on orange */
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))', /* 230 10% 25% */
          foreground: 'hsl(var(--secondary-foreground))' /* 0 0% 98% */
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))', /* 230 10% 25% */
          foreground: 'hsl(var(--muted-foreground))' /* 0 0% 63.9% */
        },
        accent: {
           // Adjusted accent using primary color HSL
          DEFAULT: 'hsl(var(--accent))', /* hsla(var(--primary-hsl), 0.1) */
          foreground: 'hsl(var(--accent-foreground))' /* hsl(var(--primary-hsl)) */
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))', /* 0 62.8% 30.6% */
          foreground: 'hsl(var(--destructive-foreground))' /* 0 0% 98% */
        },
        border: 'hsl(var(--border))', /* 230 10% 30% */
        input: 'hsl(var(--input))', /* 230 10% 25% */
        ring: 'hsl(var(--ring))', /* 25 95% 60% - Slightly lighter Orange for rings */
        chart: {
          '1': 'hsl(var(--chart-1))', /* 25 95% 55% */
          '2': 'hsl(var(--chart-2))', /* 210 80% 60% */
          '3': 'hsl(var(--chart-3))', /* 180 70% 50% */
          '4': 'hsl(var(--chart-4))', /* 45 90% 55% */
          '5': 'hsl(var(--chart-5))' /* 300 75% 60% */
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: {
        'elegant-sm': '0 2px 8px -1px hsla(var(--primary-hsl), 0.15), 0 1px 3px -1px hsla(var(--primary-hsl), 0.1)',
        'elegant-md': '0 5px 15px -3px hsla(var(--primary-hsl), 0.15), 0 4px 6px -4px hsla(var(--primary-hsl), 0.1)',
        'elegant-lg': '0 10px 25px -5px hsla(var(--primary-hsl), 0.2), 0 8px 10px -6px hsla(var(--primary-hsl), 0.15)',
      },
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			},
        'fade-in': {
          from: { opacity: '0', transform: 'scale(0.98)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'slide-up': {
           from: { transform: 'translateY(30px)', opacity: '0'}, // Slightly less Y distance
           to: { transform: 'translateY(0)', opacity: '1'},
        },
        'icon-bounce': {
           '0%, 100%': { transform: 'translateY(0) rotate(0)' },
           '50%': { transform: 'translateY(-4px) rotate(2deg)' }, // Adjusted bounce effect
         }
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards', // Slightly faster fade-in
        'slide-up': 'slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards', // Faster slide-up
        'icon-bounce': 'icon-bounce 0.5s ease-in-out' // Faster bounce
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
