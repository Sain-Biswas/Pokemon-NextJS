"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import NormalIcon from "@/../public/Global/normal.png";
import ShinyIcon from "@/../public/Global/shiny.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefPokemon } from "@/models/Common";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import TypeBadge from "@/components/global/TypeBadge";

export function Details({ data }: { data: string[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const text: string[] = data.filter((item) => item != null);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full px-2">
      <div className="mb-1 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <InfoIcon className="" />
          <p className="text-lg font-bold">Details</p>
        </div>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon">
            <CaretSortIcon className="h-6 w-6" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="mb-1 rounded-md border px-2 py-1 text-center font-mono shadow-sm">
        {text[0]}
      </div>
      <CollapsibleContent className="space-y-1">
        {text.slice(1).map((item, index) => (
          <div
            key={`detail-${index}`}
            className="rounded-md border px-2 py-1 text-center font-mono shadow-sm"
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
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
            Alternate Forms
          </p>
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-2">
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
      className="flex flex-col gap-2 rounded-lg p-2 sm:p-3"
      style={{
        background: `linear-gradient(to bottom, var(--${type1}), var(--${type2}))`,
      }}
    >
      <Tabs defaultValue="normal" className="flex flex-col items-center">
        <TabsList className="h-12 bg-gradient-to-r from-purple-500 to-blue-500 px-1">
          <TabsTrigger value="normal" onClick={() => setIsShiny(false)}>
            <div className="h-8 w-8">
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
          <TabsTrigger value="shiny" onClick={() => setIsShiny(true)}>
            <div className="h-8 w-8">
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
          <div className="h-80 w-80">
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
          <div className="h-80 w-80">
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
        {isShiny && <p className="text-center font-rowdies text-5xl">Shiny</p>}
        <p className="text-center font-rowdies text-5xl">{variety.name}</p>
        <div className="mt-5 flex gap-4">
          {variety.types.map((type: string) => (
            <TypeBadge key={type} type={type} size="w-14 h-14" />
          ))}
        </div>
      </div>
    </div>
  );
}
