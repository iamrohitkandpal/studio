![Portfolio Banner](https://picsum.photos/seed/portfolio/1000/300)

## 🌟 Overview

A modern, sleek personal portfolio website built with Next.js and Tailwind CSS. This project showcases a stunning dark theme with glass-morphism effects, custom animations, and interactive elements to create an immersive viewing experience.

## ✨ Features

- **Immersive Animated Background**: Dynamic starfield canvas for an engaging visual experience
- **Modern Glass-Morphism UI**: Semi-transparent, blurred backdrop panels for content sections
- **Smooth Animations & Transitions**: 
  - Floating elements
  - Gradient text effects
  - Reveal animations on scroll
  - Interactive hover effects
- **Custom Cursor Effects**: Enhanced pointer interaction with subtle ambient glow
- **Fully Responsive Design**: Optimized for all device sizes
- **Dark Theme**: Rich black background with purple accent colors
- **Interactive Project Showcase**: Expandable project cards with detailed information
- **Skills Visualization**: Organized display of technical capabilities with custom icons

## 🚀 Technologies Used

- **Frontend Framework**: Next.js 15.2.3
- **UI Library**: React 18.3.1
- **Styling**: 
  - Tailwind CSS
  - Custom CSS animations
- **UI Components**: 
  - Shadcn/ui (based on Radix UI)
  - Custom component designs
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend Integration**: Firebase
- **Form Handling**: React Hook Form
- **Deployment**: Vercel/Firebase Hosting

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Git

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kandpal-portfolio.git

# Navigate to the project directory
cd kandpal-portfolio

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Start the development server
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:9002

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles and animations
│   │   └── layout.tsx       # Root layout with fonts and providers
│   ├── components/          # UI components
│   │   ├── sections/        # Main content sections
│   │   │   ├── header.tsx   # Hero section
│   │   │   ├── projects.tsx # Projects showcase
│   │   │   └── ...          # Other sections
│   │   ├── ui/              # Reusable UI components
│   │   └── ...              # Other components
│   ├── lib/                 # Utility functions
│   └── ...
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
└── ...
```

## 🔧 Configuration

The project uses multiple configuration files:

- tailwind.config.ts - Tailwind CSS customization
- `next.config.ts` - Next.js configuration
- components.json - Shadcn UI components configuration

## 🎨 Design System

The portfolio features a carefully designed system with:

- **Color Scheme**: Dark theme with purple accents
- **Typography**: Custom font combination using Google Fonts
  - Outfit for headings
  - Manrope for body text
  - Inter for UI elements
- **Animations**: Custom keyframe animations for various interactive elements
- **Components**: Glass-morphism cards, floating elements, gradient text

## 📝 Customization

To customize the portfolio for your own use:

1. Update personal information in component files
2. Replace project details in projects.tsx
3. Modify skills and achievements in their respective section files
4. Update colors in globals.css and tailwind.config.ts
5. Replace images with your own in the component files

## 🌐 Deployment

The project can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy using Vercel CLI or GitHub integration
```

### Firebase Hosting
```bash
npm run build
firebase deploy
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons provided by [Lucide Icons](https://lucide.dev/)
- UI components based on [shadcn/ui](https://ui.shadcn.com/)

---

Built with ❤️ by [Rohit Kandpal](https://github.com/iRohitKandpal)