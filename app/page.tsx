import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MailIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="@container/main">
      <div className="grid grid-flow-row-dense grid-cols-1 @xl/main:grid-cols-2 @3xl/main:grid-cols-3 @5xl/main:grid-cols-4 p-4">
        <Card className="relative pt-0">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={600}
            height={800}
            className="relative z-20 aspect-square w-full object-cover"
          />
          <CardHeader>
            <CardTitle className="text-2xl">Hey! I'm Vinoth</CardTitle>
            <CardDescription>Software Engineer from India</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild>
              <Link href="mailto:hello@vinothkannan.com" className="w-full">
                <MailIcon />
                Say Hello
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
