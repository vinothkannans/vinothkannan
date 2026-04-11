import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

export default function Family() {
  return (
    <Card>
      <Image src="/photos/family.png" alt="Family" width={626} height={523} className="rounded-lg" />
      <CardHeader>
        <CardTitle>Family</CardTitle>
        <CardDescription>Husband. Father of two.</CardDescription>
      </CardHeader>
    </Card>
  )
}