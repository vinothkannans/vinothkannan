"use client"

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline"
import timeline from "@/lib/timeline"
import { cn } from "@/lib/utils"
import TimelineFilter from "./timeline-filter"
import { useState } from "react"

export default function TimelineComponent() {
  const [filteredTimeline, setFilteredTimeline] = useState(timeline)

  const handleFilterChange = (tag: string) => {
    if (tag === "all") {
      setFilteredTimeline(timeline)
    } else {
      setFilteredTimeline(timeline.filter((event) => event.tags.includes(tag)))
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <TimelineFilter onFilterChange={handleFilterChange} />
      <Timeline className="w-full max-w-xl mx-auto" value={0}>
        {filteredTimeline.map((event) => (
          <TimelineItem
            key={event.id}
            step={event.id}
            className={cn(
              "group-data-[orientation=vertical]/timeline:ms-10",
              "w-[calc(50%-1.5rem)] odd:ms-auto even:me-auto even:text-right even:group-data-[orientation=vertical]/timeline:ms-0 even:group-data-[orientation=vertical]/timeline:me-8",
              "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:-right-6 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:left-auto",
              "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-indicator]:translate-x-1/2 even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:-right-6",
              "even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:left-auto even:group-data-[orientation=vertical]/timeline:**:data-[slot=timeline-separator]:translate-x-1/2"
            )}
          >
            <TimelineHeader>
              <TimelineSeparator className="" />
              <TimelineDate>{event.date}</TimelineDate>
              <TimelineTitle>{event.title}</TimelineTitle>
              {event.description && <TimelineContent className="text-xs">{event.description}</TimelineContent>}
              <TimelineIndicator className="flex size-6 border-transparent items-center justify-center">
                {event.icon && (<event.icon className="size-6 text-muted-foreground" />)}
              </TimelineIndicator>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
