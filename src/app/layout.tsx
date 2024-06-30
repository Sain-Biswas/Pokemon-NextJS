import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

import localFonts from "next/font/local";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/navbar";

const roboto = localFonts({
  src: "../fonts/Roboto.ttf",
  display: "swap",
  variable: "--font-sans",
});
const rowdies = localFonts({
  src: "../fonts/Rowdies.ttf",
  display: "swap",
  variable: "--font-rowdies",
});

export const metadata: Metadata = {
  title: "Webdex",
  description:
    "An Web application providing all information you need about your favorite Pokemon along with an powerfull and easy to use RESTful API platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          roboto.variable,
          rowdies.variable,
          "min-h-screen bg-background font-sans",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NextTopLoader color="" showSpinner={false} />
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
