import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "indigo", "rose", "fuchsia", "amber", "lime", "emerald", "sky", "blue", "cyan", "green", "pink", "purple", "violet", "yellow", "red",
]
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length]
}