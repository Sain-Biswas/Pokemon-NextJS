import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import squarePokeball from "@/../public/Global/square-pokeball.webp";

import {
  EvolutionChain,
  EvolutionDetails,
  SinglePokemon,
} from "@/models/SinglePokemon";
import TypeBadge from "@/components/global/TypeBadge";

import NormalIcon from "@/../public/Global/normal.png";
import ShinyIcon from "@/../public/Global/shiny.png";
import {
  LandPlotIcon,
  MapPinnedIcon,
  PaletteIcon,
  RulerIcon,
  ShapesIcon,
  WeightIcon,
} from "lucide-react";
import { AlternateForms, Details } from "./SmallPokemonComponents";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { RefMove } from "@/models/Common";
import TypeIcons from "../../../../../../public/TypeIcon/exporter";

interface SubComponentProps {
  pokemon: string;
  typeRelations: {
    doubleDamageFrom: string[];
    doubleDamageTo: string[];
    halfDamageFrom: string[];
    halfDamageTo: string[];
    noDamageFrom: string[];
    noDamageTo: string[];
  };
}

const SmallScreen: React.FC<SubComponentProps> = ({
  pokemon,
  typeRelations,
}) => {
  const data: SinglePokemon = JSON.parse(pokemon);
  const [type1, type2] =
    data.types.length == 2
      ? [data.types[0], data.types[1]]
      : [data.types[0], data.types[0]];
  const {
    doubleDamageFrom,
    doubleDamageTo,
    halfDamageFrom,
    halfDamageTo,
    noDamageFrom,
    noDamageTo,
  } = typeRelations;

  return (
    <main className="md:hidden">
      <section
        className="mb-4 flex flex-col items-center justify-center pt-2"
        style={{
          background: `linear-gradient(to bottom, var(--${type1}), var(--${type2}), transparent)`,
        }}
      >
        <Tabs defaultValue="normal" className="flex flex-col items-center">
          <TabsList className="bg-gradient-to-r from-purple-500 to-blue-500">
            <TabsTrigger value="normal">
              <div className="h-5 w-5">
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
              <div className="h-5 w-5">
                <AspectRatio ratio={1 / 1} className="">
                  <Image
                    src={ShinyIcon}
                    alt=""
                    width={512}
                    height={512}
                    className="object-contain"
                  />
                </AspectRatio>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="normal">
            <div className="h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <AspectRatio ratio={1 / 1} className="">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
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
            <div className="h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96">
              <AspectRatio ratio={1 / 1} className="">
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${data.id}.png`}
                  alt="No Shiny Form"
                  width={475}
                  height={475}
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </AspectRatio>
            </div>
            <p className="text-center font-rowdies text-4xl sm:text-6xl lg:text-8xl">
              Shiny
            </p>
          </TabsContent>
        </Tabs>
        <div className="flex flex-col gap-1">
          <p className="text-center font-rowdies text-4xl sm:text-6xl lg:text-8xl">
            {data.name}
          </p>
          <p className="text-center font-rowdies text-4xl text-gray-400 before:content-['#'] sm:text-6xl">
            {data.id}
          </p>
          <div className="flex justify-center gap-4">
            {data.types.map((type) => (
              <TypeBadge key={type} type={type} />
            ))}
          </div>
        </div>
      </section>
      <Tabs defaultValue="about" className="flex flex-col items-center">
        <TabsList className="bg-gradient-to-r from-purple-500 to-blue-500 text-white dark:text-black">
          <TabsTrigger value="about" className="text-sm sm:text-base">
            About
          </TabsTrigger>
          <TabsTrigger value="stat" className="text-sm sm:text-base">
            Stats
          </TabsTrigger>
          <TabsTrigger value="form" className="text-sm sm:text-base">
            Evo/Forms
          </TabsTrigger>
          <TabsTrigger value="moves" className="text-sm sm:text-base">
            Moves
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="about"
          className="w-full rounded-t-xl bg-accent p-3 pt-6"
        >
          <article className="flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Species
                </p>
              </div>
            </div>
            <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-xl font-bold text-transparent">
              {data.genus}
            </p>
            <Details data={data.flavourText} />
            <div className="mt-5 flex h-12 w-full items-center justify-evenly space-x-1 text-sm">
              <div className="flex flex-col items-center justify-center">
                <RulerIcon className="" />
                <p>{data.height}</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col items-center justify-center">
                <WeightIcon />
                <p>{data.weight}</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col items-center justify-center">
                <PaletteIcon />
                <p>{data.color}</p>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col items-center justify-center">
                <ShapesIcon />
                <p>{data.shape}</p>
              </div>
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Abilities
                </p>
              </div>
            </div>
            <p className="mb-2 text-center text-xs">
              The Pokemon&apos;s Ability will be one of its non-hidden
              abilities. Hidden abilities were introduced in Generation V and
              are relatively rare and usually require some type of special
              encounter.
            </p>
            <div className="flex w-full items-center justify-around space-x-4 text-sm">
              <div className="flex flex-col items-center justify-center">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-lg text-transparent">
                  Normal
                </p>
                <Separator />
                {data.abilities.map((ability) => (
                  <p key={ability} className="mb-1 leading-4">
                    {ability}
                  </p>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-lg text-transparent">
                  Hidden
                </p>
                <Separator />
                {data.hiddenAbilities.map((ability) => (
                  <p key={ability} className="mb-1 leading-4">
                    {ability}
                  </p>
                ))}
              </div>
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-4 pb-2 pt-1">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Specials
                </p>
              </div>
            </div>
            <div className="mb-2 grid w-full grid-cols-2 gap-1">
              <div
                className={cn(
                  "rounded-lg px-3 py-1 text-center font-rowdies",
                  data.isLegendary
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-accent",
                )}
              >
                Legendary
              </div>
              <div
                className={cn(
                  "rounded-lg px-3 py-1 text-center font-rowdies",
                  data.isMythical
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-accent",
                )}
              >
                Mythical
              </div>
              <div
                className={cn(
                  "rounded-lg px-3 py-1 text-center font-rowdies",
                  data.canGmax
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-accent",
                )}
              >
                G Max
              </div>
              <div
                className={cn(
                  "rounded-lg px-3 py-1 text-center font-rowdies",
                  data.canMegaEvolve
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-accent",
                )}
              >
                Mega Evo.
              </div>
              <div
                className={cn(
                  "rounded-lg px-3 py-1 text-center font-rowdies",
                  data.canSwitchForm
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-accent",
                )}
              >
                Switch Form
              </div>
              <div
                className={cn(
                  "rounded-lg px-3 py-1 text-center font-rowdies",
                  data.haveGenderDifference
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                    : "bg-accent",
                )}
              >
                Gender Diff.
              </div>
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Location
                </p>
              </div>
            </div>
            <div className="flex w-full justify-center gap-10">
              <div className="flex flex-col items-center justify-center">
                <LandPlotIcon />
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-lg text-transparent">
                  Region
                </p>
                <Separator />
                <p>{data.region}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <MapPinnedIcon />
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-lg text-transparent">
                  Habitat
                </p>
                <Separator />
                <p>{data.habitat}</p>
              </div>
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Egg Group
                </p>
              </div>
            </div>
            <div className="mb-2 flex flex-wrap justify-center gap-3">
              {data.eggGroups.map((egg) => (
                <Badge key={`egg-${egg}`}>{egg}</Badge>
              ))}
            </div>
          </article>
        </TabsContent>
        <TabsContent
          value="stat"
          className="w-full rounded-t-xl bg-accent p-3 pt-6"
        >
          <article className="flex flex-col items-center rounded-lg border-4 bg-background p-1 px-3 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Statistics
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              {data.basestats.map((stat) => (
                <div
                  key={stat.name}
                  className="grid w-full grid-cols-[5.5rem_1fr_2.5rem] font-rowdies text-sm sm:text-base"
                >
                  <div className="leading-4">{stat.name}</div>
                  <Progress
                    value={(stat.value / 255) * 100}
                    style={{
                      background: `linear-gradient(to bottom, var(--${type1}), var(--${type2}))`,
                    }}
                    className="my-auto"
                  />
                  <p className="my-auto text-center">{stat.value}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Double Damage From
                </p>
              </div>
            </div>
            <div className="mb-2 flex w-full flex-wrap justify-center gap-3">
              {doubleDamageFrom.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
              {doubleDamageFrom.length == 0 && (
                <p className="font-bold sm:text-lg">None</p>
              )}
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Double Damage To
                </p>
              </div>
            </div>
            <div className="mb-2 flex w-full flex-wrap justify-center gap-3">
              {doubleDamageTo.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
              {doubleDamageTo.length == 0 && (
                <p className="font-bold sm:text-lg">None</p>
              )}
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Half Damage From
                </p>
              </div>
            </div>
            <div className="mb-2 flex w-full flex-wrap justify-center gap-3">
              {halfDamageFrom.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
              {halfDamageFrom.length == 0 && (
                <p className="font-bold sm:text-lg">None</p>
              )}
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  Half Damage To
                </p>
              </div>
            </div>
            <div className="mb-2 flex w-full flex-wrap justify-center gap-3">
              {halfDamageTo.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
              {halfDamageTo.length == 0 && (
                <p className="font-bold sm:text-lg">None</p>
              )}
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  No Damage From
                </p>
              </div>
            </div>
            <div className="mb-2 flex w-full flex-wrap justify-center gap-3">
              {noDamageFrom.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
              {noDamageFrom.length == 0 && (
                <p className="font-bold sm:text-lg">None</p>
              )}
            </div>
          </article>
          <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
            <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
              <div className="rounded-full bg-accent px-2">
                <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
                  No Damage To
                </p>
              </div>
            </div>
            <div className="mb-2 flex w-full flex-wrap justify-center gap-3">
              {noDamageTo.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
              {noDamageTo.length == 0 && (
                <p className="font-bold sm:text-lg">None</p>
              )}
            </div>
          </article>
        </TabsContent>
        <TabsContent
          value="form"
          className="w-full rounded-t-xl bg-accent p-3 pt-6"
        >
          <EvolutionFroms
            evolution={data.evolutionChain}
            type1={type1}
            type2={type2}
          />
          <AlternateForms varieties={data.varieties} />
        </TabsContent>
        <TabsContent
          value="moves"
          className="grid w-full grid-cols-2 gap-2 rounded-t-xl bg-accent p-3 sm:grid-cols-3"
        >
          {data.moves.map((move) => (
            <Moves key={`move-${move.id}`} move={move} />
          ))}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default SmallScreen;

function EvolutionFroms({
  evolution,
  type1,
  type2,
}: {
  evolution: EvolutionChain[];
  type1: string;
  type2: string;
}) {
  return (
    <article className="flex flex-col items-center rounded-lg bg-background p-1 pb-2">
      <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
        <div className="rounded-full bg-accent px-2">
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies font-bold text-transparent">
            Evolution Chain
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 px-3">
        {evolution.map((evo) => (
          <div
            key={evo.id}
            className="w-full overflow-hidden rounded-lg bg-accent"
          >
            {evo.details.length > 0 && (
              <div className="flex items-center justify-center gap-1 p-2">
                {evo.details.map((detail: EvolutionDetails) => (
                  <div
                    key={`evo-${detail.level}`}
                    className="rounded-md border border-purple-500 p-1"
                  >
                    {detail.time && (
                      <p className="font-rowdies text-xs sm:text-sm">
                        Time: {detail.time}
                      </p>
                    )}
                    {detail.level && (
                      <p className="font-rowdies text-xs sm:text-sm">
                        Level: {detail.level}
                      </p>
                    )}
                    {detail.trigger && (
                      <p className="font-rowdies text-xs sm:text-sm">
                        Trigger: {detail.trigger}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
            <div
              className="flex w-full rounded-md p-2"
              style={{
                background: `linear-gradient(to bottom, var(--${type1}), var(--${type2}))`,
              }}
            >
              <div className="h-28 w-28 sm:h-56 sm:w-56">
                <AspectRatio ratio={1 / 1} className="">
                  <Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evo.id}.png`}
                    alt=""
                    width={475}
                    height={475}
                    className="object-contain"
                  />
                </AspectRatio>
              </div>
              <div className="flex flex-grow flex-col items-center justify-center">
                <p className="font-rowdies text-slate-700 before:content-['#'] sm:text-3xl">
                  {evo.id}
                </p>
                <p className="font-rowdies sm:text-3xl">{evo.name}</p>
                <div className="flex gap-2">
                  {evo.types.map((type: string) => (
                    <TypeBadge
                      key={type}
                      type={type}
                      size="w-5 h-5 sm:w-10 sm:h-10"
                    />
                  ))}
                </div>
                <Link
                  href={`/pokedex/pokemon/${evo.id}`}
                  className="text-xs sm:text-base"
                >
                  Learn more...
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function Moves({ move }: { move: RefMove }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl p-2"
      style={{ backgroundColor: `var(--${move.type})` }}
    >
      <p className="font-rowdies text-lg text-gray-300 before:content-['#']">
        {move.id}
      </p>
      <p className="font-rowdies text-xl text-white">{move.name}</p>
      <Link href={`/pokedex/move/${move.id}`} className="text-xs">
        Learn more..
      </Link>
      <Image
        src={TypeIcons[move.type].src}
        alt=""
        width={256}
        height={256}
        className="absolute bottom-1 right-1 h-8 w-8"
      />
    </div>
  );
}
