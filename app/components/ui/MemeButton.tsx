import * as React from "react"
import { cn } from "@/lib/utils"

const MemeButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 transform hover:scale-105 transition-all shadow-lg border-4 border-black dark:border-yellow-500",
      className
    )}
    {...props}
  />
))
MemeButton.displayName = "MemeButton"

export { MemeButton }