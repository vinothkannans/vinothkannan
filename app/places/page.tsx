import VisitedCities from "@/components/visited/cities";
import { MapPinIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="relative h-full">
      <div className="text-lg font-semibold absolute top-4 left-4 z-10 flex items-center gap-2">
        <MapPinIcon />
        Visited Places
      </div>
      <VisitedCities />
    </div>
  )
}