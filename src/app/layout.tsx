import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Webdex",
  description: "An Web application providing all information you need about your favorite Pokemon along with an powerfull and easy to use RESTful API platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background min-h-screen")}>
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange >
          <NextTopLoader color="" showSpinner={false} />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
