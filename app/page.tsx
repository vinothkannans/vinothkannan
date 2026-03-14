import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="@container/main">
      <div className="grid gap-4 grid-flow-row-dense grid-cols-1 @xl/main:grid-cols-2 @3xl/main:grid-cols-3 @5xl/main:grid-cols-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Hey! I'm Vinoth 👋</CardTitle>
            <CardDescription>Software Engineer from India</CardDescription>
          </CardHeader>
        </Card>
        <Card className="p-0 col-span-4">
          <CardContent className="px-0 h-full min-h-96">
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1K4q1b3-aXaQHuYZRwG9dh7IE-5Sj4Bs&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%">
            </iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
