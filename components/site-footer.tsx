import { ModeToggle } from "./mode-toggle"

export function SiteFooter() {
  return (
    <footer className="flex items-center justify-between px-4 z-1 bg-background/95">
      <div className="text-center">
        <p className="text-xs text-muted-foreground">&copy; 2026 Vinoth Kannan</p>
      </div>
      <ModeToggle />
    </footer>
  )
}
