import AppBreadcrumb from "@/components/app-breadcrumb";
import TimelineComponent from "@/components/timeline";
import { BreadcrumbItem, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  return {
    title: "Timeline",
    description: "A collection of events in my life",
  }
}

export default function Page() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <AppBreadcrumb>
        <BreadcrumbItem>
          <BreadcrumbPage>Timeline</BreadcrumbPage>
        </BreadcrumbItem>
        <BreadcrumbSeparator>-</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-muted-foreground">A collection of events in my life</BreadcrumbPage>
        </BreadcrumbItem>
      </AppBreadcrumb>
      <TimelineComponent />
    </div >
  )
}