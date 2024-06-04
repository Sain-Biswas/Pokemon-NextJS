"use client";

import Logo from "@/../public/logo512.png";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Getting Started",
    href: "/docs/api/getting-started",
    description: "A giude to help you use our api without any hassle.",
  },
  {
    title: "All Pokemon List",
    href: "/docs/api/pokemon-list",
    description: "Access a list of all the pokemons available in our database.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavBar() {
  const router = useRouter();

  function randomRoute() {
    console.log("Random Pokemon");
  }

  return (
    <nav className="flex h-12 justify-around border-b-2 py-1">
      <div className="flex items-center font-sans">
        <Image
          src={Logo}
          alt=""
          width={512}
          height={512}
          className="h-10 w-10 object-contain"
        />
        <div className="flex flex-col items-center justify-center leading-3">
          <p className="text-xl font-bold">WebDex</p>
          <p className="text-[0.6rem] leading-3">Web based Pokedex</p>
        </div>
      </div>
      <NavigationMenu className="hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/pokedex"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        PokeDex
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed webpages to deliver all the
                        PokeData in an graphical view.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/pokedex/pokemon" title="Pokemon">
                  See all the beings of the world of Pocket Monsters.
                </ListItem>
                <ListItem href="/pokedex/types" title="Types">
                  Get to know all the various types that Pocket Monters belong
                  to.
                </ListItem>
                <ListItem href="/pokedex/moves" title="Moves">
                  See all the amazing moves your favorite Pokemon can use.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                onClick={randomRoute}
                className={navigationMenuTriggerStyle()}
              >
                Random
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
