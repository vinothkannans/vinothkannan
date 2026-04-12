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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon, BookmarkIcon, BriefcaseBusinessIcon, BriefcaseIcon, Globe2Icon, GlobeIcon, HandshakeIcon, HistoryIcon, HomeIcon, LogsIcon, MailIcon, MapPinIcon, PlaneIcon, SendIcon, UserPlus2Icon, UserPlusIcon } from "lucide-react"
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
                loading="eager"
                className="z-21 aspect-square w-full object-cover group-hover:opacity-0 group-active:opacity-0 group-focus:opacity-0 group-focus-within:opacity-0 transition duration-2000"
              />
              <Image
                src="/avatar-color.png"
                alt="Avatar"
                width={617}
                height={986}
                loading="eager"
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
                  className="min-w-8 w-auto grow bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                >
                  <HandshakeIcon />
                  <span>Hire Me</span>
                </SidebarMenuButton>
                <SidebarMenuButton
                  render={<Link href="https://www.upwork.com/freelancers/~0164138e7e64021691" target="_blank" className="flex justify-center" />}
                  className="bg-background size-8 group-data-[collapsible=icon]:opacity-0 shadow-md ring-1 ring-foreground/5"
                >
                  <SiUpwork />
                  <span className="sr-only">Upwork</span>
                </SidebarMenuButton>
                <SidebarMenuButton
                  render={<Link href="mailto:hello@vinothkannan.com" className="flex justify-center" />}
                  className="bg-background size-8 group-data-[collapsible=icon]:opacity-0 shadow-md ring-1 ring-foreground/5"
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
                  tooltip="Travel"
                >
                  <Globe2Icon />
                  <span>Travel</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      render={<Link href="/places" />}
                    >
                      <MapPinIcon />
                      <span>Places</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="grow" />
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Travel"
                >
                  <LogsIcon />
                  <span>Logs</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      render={<Link href="/logs/bookmarks" />}
                    >
                      <BookmarkIcon />
                      <span>Bookmarks</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton
                      render={<Link href="/logs/flights" />}
                    >
                      <PlaneIcon />
                      <span>Flights</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}