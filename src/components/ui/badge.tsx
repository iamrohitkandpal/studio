import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80 shadow-sm hover:shadow",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 shadow-sm hover:shadow",
        outline: "text-foreground hover:bg-accent hover:text-accent-foreground",
        success: "border-transparent bg-green-500/90 text-white hover:bg-green-500/70 shadow-sm hover:shadow",
        info: "border-transparent bg-blue-500/90 text-white hover:bg-blue-500/70 shadow-sm hover:shadow",
        warning: "border-transparent bg-yellow-500/90 text-white hover:bg-yellow-500/70 shadow-sm hover:shadow",
        gradient: "border-transparent bg-gradient-to-r from-primary to-primary/70 text-primary-foreground shadow-sm hover:shadow",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
