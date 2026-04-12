import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { BookmarkIcon, ChevronRightIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AppBreadcrumb from "@/components/app-breadcrumb"

export async function generateMetadata() {
  return {
    title: "Bookmarks",
    description: "A collection of web page links I find interesting",
  }
}

const links = [
  {
    title: "Traffic.cv",
    url: "https://traffic.cv/vinothkannan.com",
    description: "Traffic.cv is a platform that helps you track your website traffic and provides insights on how to improve it.",
    icon: null,
    image: "https://traffic.cv/logo-light.svg"
  }
]

export default function Page() {
  return (
    <div className="@container/main h-full my-4">
      <div className="text-lg font-semibold flex items-center gap-2 flex w-full">
        <AppBreadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink>Logs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Bookmarks</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator>-</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-muted-foreground">A collection of web page links I find interesting</BreadcrumbPage>
          </BreadcrumbItem>
        </AppBreadcrumb>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="text-lg font-semibold flex items-center gap-2">
          <BookmarkIcon />
          Bookmarks
        </div>
        <ItemGroup>
          {links.map((link) => (
            <Item variant="outline" key={link.url} render={<Link href={link.url} target="_blank" />}>
              <ItemMedia>
                {link.image && (
                  <Image
                    src={link.image}
                    alt={link.title}
                    width={617}
                    height={986}
                    className="z-21 size-12 aspect-square w-full object-cover group-hover:opacity-0 group-active:opacity-0 group-focus:opacity-0 group-focus-within:opacity-0 transition duration-2000"
                  />
                )}
                {/* {link.icon && (
                  <link.icon className="size-8 mt-1" />
                )} */}
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{link.title}</ItemTitle>
                <ItemDescription>{link.description}</ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon />
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </div>
    </div>
  )
}