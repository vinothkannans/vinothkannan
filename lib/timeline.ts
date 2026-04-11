import { SiDiscourse } from "@icons-pack/react-simple-icons";
import { BabyIcon, BriefcaseIcon, BuildingIcon, CodeIcon, ComputerIcon, EarthIcon, GemIcon, GlobeIcon, KeyboardIcon, LogOutIcon, SchoolIcon, UniversityIcon, UserIcon, UsersIcon } from "lucide-react";

const timeline = [
  {
    id: 1,
    date: "Mar 2, 1987",
    title: "Born",
    icon: BabyIcon,
    tags: ["Personal", "Family"]
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
    date: "May, 1994",
    title: "My wife was born",
    icon: BabyIcon,
    tags: ["Personal", "Family"]
  },
  {
    id: 4,
    date: "2000",
    title: "Learning Software",
    icon: CodeIcon,
    tags: ["Personal"]
  },
  {
    id: 5,
    date: "2003 - 2006",
    title: "College",
    icon: UniversityIcon,
    tags: ["Personal"]
  },
  {
    id: 6,
    date: "2006",
    title: "First Job as Computer Tutor",
    icon: ComputerIcon,
    tags: ["Work", "Job"]
  },
  {
    id: 7,
    date: "2008",
    title: "First Job as Software Developer",
    icon: KeyboardIcon,
    tags: ["Work", "Job"]
  },
  {
    id: 8,
    date: "Oct 13, 2008",
    title: "Registered vinkas.com",
    icon: GlobeIcon,
    tags: ["Work", "Business"]
  },
  {
    id: 9,
    date: "2009",
    title: "Co-founded Vinkas Solutions",
    icon: BuildingIcon,
    tags: ["Work", "Business"]
  },
  {
    id: 10,
    date: "May 6, 2015",
    title: "First open source contribution",
    icon: CodeIcon,
    tags: ["Work", "Open Source"]
  },
  {
    id: 11,
    date: "Feb 7, 2016",
    title: "Got Married",
    description: "to Sathya",
    icon: GemIcon,
    tags: ["Personal", "Family"]
  },
  {
    id: 12,
    date: "Jan, 2017",
    title: "Son was Born",
    description: "Rithvik",
    icon: BabyIcon,
    tags: ["Personal", "Family"]
  },
  {
    id: 13,
    date: "Oct 23, 2017",
    title: "Joined the Discourse team",
    icon: SiDiscourse,
    tags: ["Work", "Job"]
  },
  {
    id: 14,
    date: "Sep 23, 2018",
    title: "Travelled to Singapore",
    description: "First international travel. First meetup with Discourse team.",
    icon: EarthIcon,
    tags: ["Personal", "Work", "Travel"]
  },
  {
    id: 15,
    date: "Nov, 2020",
    title: "Daughter was Born",
    description: "Ithika",
    icon: BabyIcon,
    tags: ["Personal", "Family"]
  },
  {
    id: 16,
    date: "Oct 22, 2022",
    title: "Travelled to United Arab Emirates",
    description: "First international family trip",
    icon: EarthIcon,
    tags: ["Personal", "Travel", "Family"]
  },
  {
    id: 17,
    date: "Mar 14, 2023",
    title: "Discourse meetup at Malaysia",
    icon: EarthIcon,
    tags: ["Personal", "Work", "Travel"]
  },
  {
    id: 18,
    date: "Sep 16, 2023",
    title: "Discourse meetup at Portugal",
    icon: EarthIcon,
    tags: ["Personal", "Work", "Travel"]
  },
  {
    id: 19,
    date: "Jan 23, 2024",
    title: "Company Incorporated in Singapore",
    icon: BuildingIcon,
    description: "Vinkas Technologies Pte. Ltd.",
    tags: ["Work", "Business"]
  },
  {
    id: 20,
    date: "May 5, 2024",
    title: "Family trip to Malaysia",
    icon: EarthIcon,
    tags: ["Personal", "Travel", "Family"]
  },
  {
    id: 21,
    date: "Aug 23, 2024",
    title: "Left Discourse",
    icon: LogOutIcon,
    tags: ["Work", "Job"]
  },
  {
    id: 22,
    date: "Jan 25, 2025",
    title: "Company Incorporated in India",
    icon: BuildingIcon,
    description: "Vinkas Tech Private Limited",
    tags: ["Work", "Business"]
  },
  {
    id: 23,
    date: "Apr 12, 2025",
    title: "Family trip to Thailand",
    icon: EarthIcon,
    tags: ["Personal", "Travel", "Family"]
  },
  {
    id: 24,
    date: "Jan 14, 2026",
    title: "Travelled to Sri Lanka",
    icon: EarthIcon,
    tags: ["Personal", "Travel"]
  },
  {
    id: 25,
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