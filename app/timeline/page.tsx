import TimelineComponent from "@/components/timeline";

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
      <div className="px-4">
        <h1 className="text-2xl font-bold">Timeline</h1>
        <p className="text-muted-foreground">A collection of events in my life</p>
      </div>
      <div className="px-4">
        <TimelineComponent />
      </div>
    </div>
  )
}