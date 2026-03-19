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
import { SiDiscourse } from "@icons-pack/react-simple-icons"
import { BabyIcon, BuildingIcon, CalculatorIcon, CheckIcon, CodeIcon, ComputerIcon, GlobeIcon, KeyboardIcon, LogOutIcon, PresentationIcon, SchoolIcon, UniversityIcon, UserPenIcon } from 'lucide-react'

const events = [
  {
    id: 1,
    date: "Mar 2, 1987",
    title: "Born",
    icon: BabyIcon
  },
  {
    id: 2,
    date: "1991 - 2003",
    title: "School",
    icon: SchoolIcon
  },
  {
    id: 3,
    date: "2000",
    title: "Learning Software",
    icon: CodeIcon
  },
  {
    id: 4,
    date: "2003 - 2006",
    title: "College",
    icon: UniversityIcon
  },
  {
    id: 5,
    date: "2006",
    title: "First Job as Computer Tutor",
    icon: ComputerIcon
  },
  {
    id: 6,
    date: "2008",
    title: "First Job as Software Developer",
    icon: KeyboardIcon
  },
  {
    id: 7,
    date: "Oct 13, 2008",
    title: "Registered vinkas.com",
    icon: GlobeIcon
  },
  {
    id: 8,
    date: "2009",
    title: "Co-founded Vinkas Solutions",
    icon: BuildingIcon
  },
  {
    id: 9,
    date: "Oct 23, 2017",
    title: "Joined the Discourse team",
    icon: SiDiscourse
  },
  {
    id: 10,
    date: "Jan 23, 2024",
    title: "Company Incorporated in Singapore",
    icon: BuildingIcon,
    description: "Vinkas Technologies Pte. Ltd."
  },
  {
    id: 11,
    date: "Aug 23, 2024",
    title: "Left Discourse",
    icon: LogOutIcon
  },
  {
    id: 12,
    date: "Jan 25, 2025",
    title: "Company Incorporated in India",
    icon: BuildingIcon,
    description: "Vinkas Tech Private Limited"
  },
]

export default function Life() {
  return (
    <Timeline className="w-max mx-auto">
      {events.reverse().map((event) => (
        <TimelineItem
          key={event.id}
          step={event.id}
          className="group-data-[orientation=vertical]/timeline:ms-10"
        >
          <TimelineHeader>
            <TimelineSeparator className="" />
            <TimelineDate>{event.date}</TimelineDate>
            <TimelineTitle>{event.title}</TimelineTitle>
            {event.description && <TimelineContent>{event.description}</TimelineContent>}
            <TimelineIndicator className="flex size-6 border-transparent items-center justify-center">
              {event.icon && (<event.icon className="size-6 text-muted-foreground" />)}
            </TimelineIndicator>
          </TimelineHeader>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
