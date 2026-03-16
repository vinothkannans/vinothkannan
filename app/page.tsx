import GitHubContributionGraph from "@/components/github-contribution-graph";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VisitedCountries from "@/components/visited-countries";
import { SiChessdotcom, SiGithub, SiInstagram } from "@icons-pack/react-simple-icons";
import { SwordsIcon, UserPlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="@container/main">
      <div className="grid gap-4 grid-flow-row-dense grid-cols-1 @xl/main:grid-cols-2 @3xl/main:grid-cols-3 @5xl/main:grid-cols-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Hey! Welcome 👋</CardTitle>
            <CardDescription>I'm Vinoth, a Software Engineer from Madurai, India.</CardDescription>
          </CardHeader>
        </Card>
        <Card className="@xl/main:col-span-2 @3xl/main:col-span-3 @5xl/main:col-span-4">
          <CardHeader>
            <CardTitle>
              <a href="https://github.com/vinothkannans" target="_blank" className="flex items-center gap-2">
                <SiGithub className="h-4 w-4" />
                GitHub
              </a>
            </CardTitle>
            <CardDescription>My open source contribution graph for the last year.</CardDescription>
            <CardAction>
              <Button variant="outline" size="xs" asChild>
                <a href="https://github.com/vinothkannans" target="_blank">
                  <UserPlusIcon />
                  Follow
                </a>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <GitHubContributionGraph />
          </CardContent>
        </Card>
        <Card className="grayscale hover:grayscale-0 transition duration-1000">
          <CardContent className="flex flex-col gap-2">
            <div className="flex justify-between">
              <a href="https://instagram.com/vinothkannans" target="_blank" className="flex items-center gap-2">
                <SiInstagram className={`h-4 w-4 fill-[#FF0069]`} /> Instagram
              </a>
              <Button variant="secondary" size="xs" asChild>
                <a href="https://instagram.com/vinothkannans" target="_blank">
                  <UserPlusIcon />
                  Follow
                </a>
              </Button>
            </div>
            <div className="flex justify-between">
              <a href="https://chess.com/member/vinothkannans" target="_blank" className="flex items-center gap-2">
                <SiChessdotcom className={`h-4 w-4 fill-[#81B64C]`} /> Chess.com
              </a>
              <Button variant="secondary" size="xs" asChild>
                <a href="https://chess.com/play/vinothkannans" target="_blank">
                  <SwordsIcon />
                  Play
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="relative @xl/main:col-span-2 @3xl/main:col-span-3 @5xl/main:col-span-4 p-0">
          <CardHeader className="absolute left-0 top-0 w-full p-4 z-10">
            <CardTitle>Visited Countries</CardTitle>
            <CardDescription>I've visited these countries so far.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <VisitedCountries />
            {/* <iframe
              src="https://www.google.com/maps/d/embed?mid=1K4q1b3-aXaQHuYZRwG9dh7IE-5Sj4Bs&ehbc=2E312F&noprof=1"
              width="100%"
              height="100%">
            </iframe> */}
          </CardContent>
        </Card>
      </div>
    </div >
  );
}
