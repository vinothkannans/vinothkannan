import { Button } from "@/components/ui/button"
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"
import { SiDiscourse } from "@icons-pack/react-simple-icons"
import { ArrowRightIcon, ChevronRightIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: "Links",
    description: "A collection of web page links I find interesting",
  }
}

const links = [
  {
    title: "Discourse Meta",
    url: "https://meta.discourse.org/u/vinothkannans",
    description: "Discourse is an open source forum software. As a contributor and an ex-employee, I participate in discussions and share my knowledge with the community.",
    icon: SiDiscourse,
    image: null
  }
]

export default function Page() {
  return (
    <div className="@container/main">
      <div className="flex flex-col gap-4 p-4">
        <div className="text-lg font-semibold flex items-center gap-2">
          <LinkIcon />
          Links
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
                    className="z-21 aspect-square w-full object-cover group-hover:opacity-0 group-active:opacity-0 group-focus:opacity-0 group-focus-within:opacity-0 transition duration-2000"
                  />
                )}
                {link.icon && (
                  <link.icon className="size-8 mt-1" />
                )}
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