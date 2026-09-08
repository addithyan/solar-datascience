import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "line";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-150 disabled:opacity-40",
        size === "sm" ? "h-10 px-3 text-sm rounded-sm" : "h-11 px-4 text-sm rounded-md",
        variant === "primary" && "bg-accent text-accent-fg hover:bg-fg",
        variant === "ghost" && "bg-transparent text-fg hover:bg-bg-hover",
        variant === "line" && "border border-line text-fg hover:border-line-strong hover:bg-bg-hover",
        className,
      )}
      {...props}
    />
  );
}
