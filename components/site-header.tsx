import { SidebarTrigger } from "@/components/ui/sidebar"
import Logo from "@/components/logo"
import { ModeToggle } from "./mode-toggle"
import { GitHubLink } from "./github-link"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 xl:px-6">
        <SidebarTrigger />
        <div className="mx-auto">
          <Logo />
        </div>
        <GitHubLink />
      </div>
    </header>
  )
}
