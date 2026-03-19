import GitHubContributionGraph from "@/components/github-contribution-graph";
import Life from "@/components/life";
import Stack from "@/components/stack";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import VisitedCountries from "@/components/visited-countries";
import { SiChessdotcom, SiGithub, SiInstagram, SiX, SiYoutube } from "@icons-pack/react-simple-icons";
import { BellIcon, HeartIcon, HistoryIcon, MailIcon, SwordsIcon, UserPlusIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="@container/main">
      <div className="grid gap-4 grid-flow-row-dense grid-cols-1 @xl/main:grid-cols-2 @3xl/main:grid-cols-3 @5xl/main:grid-cols-4 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Hey! Welcome 👋</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm/relaxed">
            <p>
              I&apos;m Vinoth, a Software Engineer and Founder of{" "}
              <a
                href="https://vinkas.com"
                target="_blank"
                className="text-primary font-medium hover:underline transition-all underline-offset-4"
              >
                Vinkas
              </a>
              . With over 15 years of experience and a background at{" "}
              <a
                href="https://discourse.org"
                target="_blank"
                className="text-primary font-medium hover:underline transition-all underline-offset-4"
              >
                Discourse
              </a>
              , I&apos;m now building elegant software solutions and impactful digital products from Madurai, India.
            </p>
          </CardContent>
        </Card>
        <Card className="@5xl/main:col-span-2 grayscale hover:grayscale-0 transition duration-1000">
          <CardHeader>
            <CardTitle>Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <Stack />
          </CardContent>
        </Card>
        <Card className="@xl/main:col-span-2 @3xl/main:col-span-3 @5xl/main:col-span-4">
          <CardHeader>
            <CardTitle>
              <a href="https://github.com/vinothkannans" target="_blank" className="flex items-center gap-2">
                <SiGithub />
                GitHub
              </a>
            </CardTitle>
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
          <CardHeader>
            <CardTitle>Social</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex justify-between">
              <a href="https://linkedin.com/in/vinothkannans" target="_blank" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4 w-4 fill-[#0077B5]"><path d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z" /></svg>
                LinkedIn
              </a>
              <Button variant="secondary" size="xs" asChild>
                <a href="https://linkedin.com/in/vinothkannans" target="_blank">
                  <UserPlusIcon />
                  Connect
                </a>
              </Button>
            </div>
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
              <a href="https://youtube.com/@vinothkannans" target="_blank" className="flex items-center gap-2">
                <SiYoutube className={`h-4 w-4 fill-[#FF0000]`} /> YouTube
              </a>
              <Button variant="secondary" size="xs" asChild>
                <a href="https://youtube.com/@vinothkannans" target="_blank">
                  <BellIcon />
                  Subscribe
                </a>
              </Button>
            </div>
            <div className="flex justify-between">
              <a href="https://x.com/vinothkannans" target="_blank" className="flex items-center gap-2">
                <SiX className={`h-4 w-4 fill-[#000000]`} /> X
              </a>
              <Button variant="secondary" size="xs" asChild>
                <a href="https://x.com/vinothkannans" target="_blank">
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
        <Card className="@xl/main:col-span-2">
          <CardHeader>
            <CardTitle className="flex gap-2 items-center">
              <HeartIcon />
              Life
            </CardTitle>
            <CardAction>
              <Button variant="secondary" size="xs" asChild>
                <a href="/timeline">
                  View All
                </a>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-48" type="always">
              <Life />
            </ScrollArea>
          </CardContent>
        </Card>
        <Card className="@xl/main:col-span-2">
          <CardHeader>
            <CardTitle className="flex gap-2 items-center">
              <MailIcon />
              Newsletter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div id="mc_embed_shell">

              <div id="mc_embed_signup">
                <form action="https://vinothkannan.us5.list-manage.com/subscribe/post?u=4d9c81f18bca0f5f0e29207f7&amp;id=7bb635c189&amp;f_id=001c23eaf0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate>
                  <div id="mc_embed_signup_scroll" className="flex flex-col gap-2">
                    <div className="indicates-required text-muted-foreground text-xs text-right"><span className="asterisk">*</span> indicates required</div>
                    <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><Input type="email" name="EMAIL" className="required email mt-1" id="mce-EMAIL" required placeholder="username@example.com" /></div>
                    <div id="mce-responses" className="clear foot">
                      <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                      <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                    </div>
                    <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                      <Input type="text" name="b_4d9c81f18bca0f5f0e29207f7_7bb635c189" tabIndex={-1} />
                    </div>
                    <div className="optionalParent ml-auto">
                      <div className="clear foot">
                        <Button size="lg" type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                          Subscribe
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <p style={{ margin: "0px auto" }}><a href="http://eepurl.com/jBOu-o" title="Mailchimp - email marketing made easy and fun"><span style={{ display: "inline-block", backgroundColor: "transparent", borderRadius: "4px" }}><Image className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: "220px", height: "40px", display: "flex", padding: "2px 0px", justifyContent: "center", alignItems: "center" }} width={220} height={40} /></span></a></p>
          </CardFooter>
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
