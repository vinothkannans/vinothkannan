import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Vinoth Kannan",
  description: "Personal website of Vinoth Kannan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col justify-between">
            <header className="sticky top-0 z-50 w-full bg-background py-2 shadow-xs">
              <div className="container-wrapper px-6 3xl:fixed:px-0">
                <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! 3xl:fixed:container">
                  <Link href="/" className="text-xl mr-auto font-semibold">Vinoth Kannan</Link>
                  <ModeToggle />
                </div>
              </div>
            </header>
            {children}
            <footer className="sticky bottom-0 z-50 w-full py-2">
              <div className="container-wrapper px-6 3xl:fixed:px-0">
                <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! 3xl:fixed:container">
                  <p className="text-sm mx-auto text-center text-muted-foreground">&copy; 2026 Vinoth Kannan. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
