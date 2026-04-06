import Link from "next/link"
import { Button } from "./ui/button"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { Suspense } from "react"
import { Skeleton } from "./ui/skeleton"

const GITHUB_REPO = "vinothkannans/vinothkannan"

export function GitHubLink() {
  return (
    <Button size="xs" variant="ghost" className="h-8 shadow-none" render={<Link href={`https://github.com/${GITHUB_REPO}`} target="_blank" rel="noreferrer" />} nativeButton={false}>
      <SiGithub className="size-5" />
      <Suspense fallback={<Skeleton className="h-4 w-[42px]" />}>
        <StarsCount />
      </Suspense>
    </Button>
  )
}

export async function StarsCount() {
  const data = await fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
    next: { revalidate: 86400 },
  })
  const json = await data.json()
  const count = json.stargazers_count

  if (count <= 0) {
    return null
  }

  const text =
    count >= 1000
      ? `${Math.round(count / 1000)}k`
      : count?.toLocaleString()

  return (
    <span className="w-fit text-xs text-muted-foreground tabular-nums">
      {text}
    </span>
  )
}