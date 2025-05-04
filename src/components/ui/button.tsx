import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400/30 before:via-pink-400/30 before:to-purple-400/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-400/30 before:via-orange-400/30 before:to-red-400/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/10 before:via-primary/20 before:to-primary/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md before:absolute before:inset-0 before:bg-gradient-to-r before:from-indigo-400/30 before:via-blue-400/30 before:to-indigo-400/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        ghost: "hover:bg-accent hover:text-accent-foreground before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/5 before:via-primary/10 before:to-primary/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-md hover:shadow-lg hover:shadow-primary/20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-400/30 before:via-fuchsia-400/30 before:to-violet-400/30 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
