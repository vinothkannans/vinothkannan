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
import Image from "next/image"
import Link from "next/link"
import { BriefcaseIcon, HistoryIcon, HomeIcon, MailIcon, MapPinIcon, SendIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SiUpwork } from "@icons-pack/react-simple-icons"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/" className="relative group h-full p-0! shadow rounded-full!" />}
            >
              <Image
                src="/avatar-gray.png"
                alt="Avatar"
                width={617}
                height={986}
                className="z-21 aspect-square w-full object-cover group-hover:opacity-0 group-active:opacity-0 group-focus:opacity-0 group-focus-within:opacity-0 transition duration-2000"
              />
              <Image
                src="/avatar-color.png"
                alt="Avatar"
                width={617}
                height={986}
                className="absolute z-20 aspect-square w-full object-cover"
              />
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
                  render={<Link href="mailto:vinoth.kannan@vinkas.com" className="flex justify-center" />}
                  tooltip="Hire Me"
                  className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                >
                  <BriefcaseIcon />
                  <span>Hire Me</span>
                </SidebarMenuButton>
                <SidebarMenuButton
                  render={<Link href="https://www.upwork.com/freelancers/~0164138e7e64021691" target="_blank" className="flex justify-center" />}
                  className="size-8 group-data-[collapsible=icon]:opacity-0 shadow-md ring-1 ring-foreground/5"
                >
                  <SiUpwork />
                  <span className="sr-only">Upwork</span>
                </SidebarMenuButton>
                <SidebarMenuButton
                  render={<Link href="mailto:hello@vinothkannan.com" className="flex justify-center" />}
                  className="size-8 group-data-[collapsible=icon]:opacity-0 shadow-md ring-1 ring-foreground/5"
                >
                  <MailIcon />
                  <span className="sr-only">Send a message</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/" />}
                  tooltip="Home"
                  className="min-w-8"
                >
                  <HomeIcon />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/timeline" />}
                  tooltip="Timeline"
                  className="min-w-8"
                >
                  <HistoryIcon />
                  <span>Timeline</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/places" />}
                  tooltip="Places"
                  className="min-w-8"
                >
                  <MapPinIcon />
                  <span>Places</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="mailto:hello@vinothkannan.com" />}
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <MailIcon />
                  <span>Say Hello</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="mailto:hello@vinothkannan.com" />}
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <MailIcon />
                  <span>Say Hello</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="mailto:hello@vinothkannan.com" />}
                  tooltip="Say Hello"
                  className="min-w-8"
                >
                  <MailIcon />
                  <span>Say Hello</span>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
            </SidebarMenu>
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