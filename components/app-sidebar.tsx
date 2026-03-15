import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Logo from "@/components/logo"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { MailIcon, SendIcon } from "lucide-react"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
            >
              <Link href="/" className="h-auto p-0! shadow">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={600}
                  height={800}
                  className="relative z-20 aspect-square w-full object-cover grayscale hover:grayscale-0 transition duration-2000"
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center gap-2">
                <SidebarMenuButton
                  asChild
                  tooltip="Say Hello"
                  className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                >
                  <Link href="mailto:hello@vinothkannan.com" className="flex justify-center">
                    <MailIcon />
                    <span>Say Hello</span>
                  </Link>
                </SidebarMenuButton>
                {/* <Button
                  size="icon"
                  className="size-8 group-data-[collapsible=icon]:opacity-0"
                  variant="outline"
                >
                  <SendIcon />
                  <span className="sr-only">Inbox</span>
                </Button> */}
              </SidebarMenuItem>
            </SidebarMenu>
            {/* <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <Link href="mailto:hello@vinothkannan.com">
                    <MailIcon />
                    <span>Say Hello</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <Link href="mailto:hello@vinothkannan.com">
                    <MailIcon />
                    <span>Say Hello</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <Link href="mailto:hello@vinothkannan.com">
                    <MailIcon />
                    <span>Say Hello</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <Link href="mailto:hello@vinothkannan.com">
                    <MailIcon />
                    <span>Say Hello</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <Link href="mailto:hello@vinothkannan.com">
                    <MailIcon />
                    <span>Say Hello</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu> */}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <footer className="bottom-0 z-50 w-full mt-auto">
          <div className="flex **:data-[slot=separator]:h-4! 3xl:fixed:container">
            <p className="text-xs text-muted-foreground">&copy; 2026 Vinoth Kannan. All rights reserved.</p>
          </div>
        </footer>
      </SidebarFooter>
    </Sidebar >
  )
}