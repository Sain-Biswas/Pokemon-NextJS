"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefPokemon } from "@/models/Common";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { InfoIcon } from "lucide-react";
import { useState } from "react";

import NormalIcon from "@/../public/Global/normal.png";
import ShinyIcon from "@/../public/Global/shiny.png";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import TypeBadge from "@/components/global/TypeBadge";

export function Details({ data }: { data: string[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const text: string[] = data.filter((item) => item != null);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full px-2">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <InfoIcon className="" />
          <p className="text-sm font-bold sm:text-base">Details</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <CaretSortIcon className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="mb-1 rounded-md border px-2 py-1 text-center font-mono text-xs shadow-sm sm:text-sm">
        {text[0]}
      </div>
      <CollapsibleContent className="space-y-1">
        {text.slice(1).map((item, index) => (
          <div
            key={`detail-${index}`}
            className="rounded-md border px-2 py-1 text-center font-mono text-xs shadow-sm sm:text-sm"
          >
            {item}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

export function AlternateForms({ varieties }: { varieties: RefPokemon[] }) {
  return (
    <article className="mt-6 flex flex-col items-center rounded-lg bg-background p-2 px-4 pb-3">
      <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
        <div className="rounded-full bg-accent px-2">
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
            Alternate Forms
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        {varieties.map((variety: RefPokemon) => (
          <AlternateFormCard variety={variety} key={variety.id} />
        ))}
        {varieties.length == 0 && (
          <p className="text-center text-lg">No Alternate forms.</p>
        )}
      </div>
    </article>
  );
}

function AlternateFormCard({ variety }: { variety: RefPokemon }) {
  const [isShiny, setIsShiny] = useState<boolean>(false);
  const [type1, type2] =
    variety.types.length == 2
      ? [variety.types[0], variety.types[1]]
      : [variety.types[0], variety.types[0]];

  return (
    <div
      className="flex gap-2 rounded-lg p-2 sm:p-3"
      style={{
        background: `linear-gradient(to bottom, var(--${type1}), var(--${type2}))`,
      }}
    >
      <Tabs defaultValue="normal" className="flex flex-col items-center">
        <TabsList className="bg-gradient-to-r from-purple-500 to-blue-500">
          <TabsTrigger value="normal">
            <div className="h-5 w-5" onClick={() => setIsShiny(false)}>
              <AspectRatio ratio={1 / 1} className="">
                <Image
                  src={NormalIcon}
                  alt=""
                  width={512}
                  height={512}
                  className="object-contain"
                />
              </AspectRatio>
            </div>
          </TabsTrigger>
          <TabsTrigger value="shiny">
            <div className="h-5 w-5" onClick={() => setIsShiny(true)}>
              <AspectRatio ratio={1 / 1} className="">
                <Image
                  src={ShinyIcon}
                  alt=""
                  width={512}
                  height={512}
                  className="object-contain text-lg"
                />
              </AspectRatio>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="normal">
          <div className="h-32 w-32 sm:h-60 sm:w-60">
            <AspectRatio ratio={1 / 1} className="">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${variety.id}.png`}
                alt=""
                width={475}
                height={475}
                priority
                className="object-contain drop-shadow-2xl"
              />
            </AspectRatio>
          </div>
        </TabsContent>
        <TabsContent value="shiny">
          <div className="h-32 w-32 sm:h-60 sm:w-60">
            <AspectRatio ratio={1 / 1} className="">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${variety.id}.png`}
                alt="No Shiny Form"
                width={475}
                height={475}
                priority
                className="object-contain drop-shadow-2xl"
              />
            </AspectRatio>
          </div>
        </TabsContent>
      </Tabs>
      <div className="flex flex-grow flex-col items-center justify-center">
        {isShiny && (
          <p className="text-center font-rowdies text-lg sm:text-3xl">Shiny</p>
        )}
        <p className="text-center font-rowdies text-lg sm:text-3xl">
          {variety.name}
        </p>
        <div className="mt-3 flex gap-2">
          {variety.types.map((type: string) => (
            <TypeBadge type={type} size="w-5 h-5 sm:w-10 sm:h-10" />
          ))}
        </div>
      </div>
    </div>
  );
}
