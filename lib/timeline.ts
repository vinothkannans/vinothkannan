import { SiDiscourse } from "@icons-pack/react-simple-icons";
import { BabyIcon, BriefcaseIcon, BuildingIcon, CodeIcon, ComputerIcon, EarthIcon, GemIcon, GlobeIcon, KeyboardIcon, LogOutIcon, SchoolIcon, UniversityIcon, UserIcon, UsersIcon } from "lucide-react";

const timeline = [
  {
    id: 1,
    date: "Mar 2, 1987",
    title: "Born",
    icon: BabyIcon,
    tags: ["Personal"]
  },
  {
    id: 2,
    date: "1991 - 2003",
    title: "School",
    icon: SchoolIcon,
    tags: ["Personal"]
  },
  {
    id: 3,
    date: "2000",
    title: "Learning Software",
    icon: CodeIcon,
    tags: ["Personal"]
  },
  {
    id: 4,
    date: "2003 - 2006",
    title: "College",
    icon: UniversityIcon,
    tags: ["Personal"]
  },
  {
    id: 5,
    date: "2006",
    title: "First Job as Computer Tutor",
    icon: ComputerIcon,
    tags: ["Work", "Job"]
  },
  {
    id: 6,
    date: "2008",
    title: "First Job as Software Developer",
    icon: KeyboardIcon,
    tags: ["Work", "Job"]
  },
  {
    id: 7,
    date: "Oct 13, 2008",
    title: "Registered vinkas.com",
    icon: GlobeIcon,
    tags: ["Work", "Business"]
  },
  {
    id: 8,
    date: "2009",
    title: "Co-founded Vinkas Solutions",
    icon: BuildingIcon,
    tags: ["Work", "Business"]
  },
  {
    id: 9,
    date: "May 6, 2015",
    title: "First open source contribution",
    icon: CodeIcon,
    tags: ["Work", "Open Source"]
  },
  {
    id: 10,
    date: "Feb 7, 2016",
    title: "Got Married",
    icon: GemIcon,
    tags: ["Personal", "Family"]
  },
  {
    id: 11,
    date: "Jan 19, 2017",
    title: "Son was Born",
    description: "Rithvik Raj",
    icon: BabyIcon,
    tags: ["Personal", "Family"]
  },
  {
    id: 12,
    date: "Oct 23, 2017",
    title: "Joined the Discourse team",
    icon: SiDiscourse,
    tags: ["Work", "Job"]
  },
  {
    id: 13,
    date: "Sep 23, 2018",
    title: "Travelled to Singapore",
    description: "First international travel. First meetup with Discourse team.",
    icon: EarthIcon,
    tags: ["Personal", "Work", "Travel"]
  },
  {
    id: 14,
    date: "Nov 29, 2020",
    title: "Daughter was Born",
    description: "Ithika Sri",
    icon: BabyIcon,
    tags: ["Personal", "Family"]
  },
  {
    id: 15,
    date: "Jan 23, 2024",
    title: "Company Incorporated in Singapore",
    icon: BuildingIcon,
    description: "Vinkas Technologies Pte. Ltd.",
    tags: ["Work", "Business"]
  },
  {
    id: 16,
    date: "Aug 23, 2024",
    title: "Left Discourse",
    icon: LogOutIcon,
    tags: ["Work", "Job"]
  },
  {
    id: 17,
    date: "Jan 25, 2025",
    title: "Company Incorporated in India",
    icon: BuildingIcon,
    description: "Vinkas Tech Private Limited",
    tags: ["Work", "Business"]
  },
  {
    id: 18,
    date: "Jan 14, 2026",
    title: "Travelled to Sri Lanka",
    icon: EarthIcon,
    tags: ["Personal", "Travel"]
  },
  {
    id: 19,
    date: "Jan 15, 2026",
    title: "Travelled to Vietnam",
    icon: EarthIcon,
    tags: ["Personal", "Travel"]
  }
]

export const tags = [
  {
    name: "Personal",
    icon: UserIcon,
  },
  {
    name: "Work",
    icon: BriefcaseIcon,
  },
  {
    name: "Business",
    icon: BuildingIcon,
  },
  {
    name: "Job",
    icon: KeyboardIcon,
  },
  {
    name: "Travel",
    icon: EarthIcon,
  },
  {
    name: "Family",
    icon: UsersIcon,
  }
]

export default timeline