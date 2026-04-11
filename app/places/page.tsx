import AppBreadcrumb from "@/components/app-breadcrumb";
import { BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import VisitedCities from "@/components/visited/cities";

export default function Page() {
  return (
    <div className="relative h-full">
      <div className="text-lg font-semibold absolute top-4 left-4 z-10 flex items-center gap-2 flex w-full">
        <AppBreadcrumb>
          <BreadcrumbItem>
            <BreadcrumbPage>Places</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator>-</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-muted-foreground">A collection of places I have visited</BreadcrumbPage>
          </BreadcrumbItem>
        </AppBreadcrumb>
      </div>
      <VisitedCities />
    </div>
  )
}