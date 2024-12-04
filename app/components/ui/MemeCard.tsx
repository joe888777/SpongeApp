import * as React from "react"
import { cn } from "@/lib/utils"

const MemeCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-3xl border-4 border-yellow-400 bg-white shadow-lg transform hover:scale-105 transition-all dark:bg-[#1A1F2E] p-4",
      className
    )}
    {...props}
  />
))
MemeCard.displayName = "MemeCard"

const MemeCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center space-x-2 p-2", className)}
    {...props}
  />
))
MemeCardHeader.displayName = "MemeCardHeader"

const MemeCardEmoji = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-2xl animate-bounce", className)}
    {...props}
  />
))
MemeCardEmoji.displayName = "MemeCardEmoji"

const MemeCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4 text-center", className)}
    {...props}
  />
))
MemeCardContent.displayName = "MemeCardContent"

export { MemeCard, MemeCardHeader, MemeCardEmoji, MemeCardContent }