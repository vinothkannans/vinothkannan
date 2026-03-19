"use client"

import { tags } from "@/lib/timeline"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import { useState } from "react"

export default function TimelineFilter({ onFilterChange }: { onFilterChange: (tag: string) => void }) {
  const [selectedTag, setSelectedTag] = useState<string>("all")

  const handleValueChange = (value: string) => {
    setSelectedTag(value)
    onFilterChange(value)
  }

  return (
    <ToggleGroup variant="outline" type="single" size="sm" defaultValue="all" className="mx-auto" value={selectedTag} onValueChange={handleValueChange}>
      <ToggleGroupItem value="all" aria-label="Toggle all" className="text-xs text-muted-foreground data-[state=on]:bg-muted data-[state=on]:text-foreground">
        All
      </ToggleGroupItem>
      {tags.map((tag) => (
        <ToggleGroupItem key={tag.name} value={tag.name} aria-label={tag.name} className="text-xs text-muted-foreground data-[state=on]:bg-muted data-[state=on]:text-foreground" >
          <tag.icon className="size-4" />
          {tag.name}
        </ToggleGroupItem>
      ))}
    </ToggleGroup >
  )
}