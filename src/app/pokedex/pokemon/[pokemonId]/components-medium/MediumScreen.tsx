import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  EvolutionChain,
  EvolutionDetails,
  SinglePokemon,
} from "@/models/SinglePokemon";

import NormalIcon from "@/../public/Global/normal.png";
import ShinyIcon from "@/../public/Global/shiny.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import TypeBadge from "@/components/global/TypeBadge";
import {
  BarChartHorizontalIcon,
  BringToFrontIcon,
  InfoIcon,
  LandPlotIcon,
  MapPinnedIcon,
  PaletteIcon,
  RulerIcon,
  ShapesIcon,
  SwordsIcon,
  WeightIcon,
} from "lucide-react";
import { AlternateForms, Details } from "./MediumScreenClient";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import TypeIcons from "../../../../../../public/TypeIcon/exporter";
import { RefMove } from "@/models/Common";

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

const MediumScreen: React.FC<SubComponentProps> = ({
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
    <main className="hidden md:block lg:hidden">
      <section
        className="mb-6 grid grid-cols-2 pt-2"
        style={{
          background: `linear-gradient(to bottom, var(--${type1}), var(--${type2}), transparent)`,
        }}
      >
        <Tabs defaultValue="normal" className="flex flex-col items-center">
          <TabsList className="h-12 bg-gradient-to-r from-purple-500 to-blue-500 px-2 text-white">
            <TabsTrigger value="normal" className="flex items-center gap-2">
              <div className="h-6 w-6">
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
              <p className="text-lg">Normal</p>
            </TabsTrigger>
            <TabsTrigger value="shiny" className="flex items-center gap-2">
              <div className="h-6 w-6">
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
              <p className="text-lg">Shiny</p>
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
          </TabsContent>
        </Tabs>
        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="font-rowdies text-5xl text-gray-600 before:content-['#']">
            {data.id}
          </h4>
          <h1 className="font-rowdies text-5xl">{data.name}</h1>
          <div className="flex flex-wrap justify-center gap-2">
            {data.types.map((type) => (
              <TypeBadge type={type} key={type} />
            ))}
          </div>
        </div>
      </section>
      <Tabs defaultValue="about" className="flex flex-col items-center">
        <TabsList className="h-12 bg-gradient-to-r from-purple-500 to-blue-500 px-2 text-white">
          <TabsTrigger value="about" className="gap-2 text-sm sm:text-base">
            <InfoIcon className="h-6 w-6" />
            <p className="text-lg">About</p>
          </TabsTrigger>
          <TabsTrigger value="stat" className="gap-2 text-sm sm:text-base">
            <BarChartHorizontalIcon className="h-6 w-6" />
            <p className="text-lg">Stats</p>
          </TabsTrigger>
          <TabsTrigger value="form" className="gap-2 text-sm sm:text-base">
            <BringToFrontIcon className="h-6 w-6" />
            <p className="text-lg">Evo/Forms</p>
          </TabsTrigger>
          <TabsTrigger value="moves" className="gap-2 text-sm sm:text-base">
            <SwordsIcon className="h-6 w-6" />
            <p className="text-lg">Moves</p>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="w-full">
          <section className="w-full rounded-t-xl border-t-4 bg-accent p-4">
            <article className="flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
              <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
                <div className="rounded-full bg-accent px-2">
                  <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
                    Species
                  </p>
                </div>
              </div>
              <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-3xl font-bold text-transparent">
                {data.genus}
              </p>
              <Details data={data.flavourText} />
              <div className="mt-5 flex h-12 w-full items-center justify-evenly space-x-1 text-lg">
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
            <div className="grid grid-cols-2">
              <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
                <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
                  <div className="rounded-full bg-accent px-2">
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
                      Abilities
                    </p>
                  </div>
                </div>
                <p className="mb-2 text-center">
                  The Pokemon&apos;s Ability will be one of its non-hidden
                  abilities. Hidden abilities were introduced in Generation V
                  and are relatively rare and usually require some type of
                  special encounter.
                </p>
                <div className="flex w-full items-center justify-around space-x-4 text-lg">
                  <div className="flex flex-col items-center justify-center">
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-xl text-transparent">
                      Normal
                    </p>
                    <Separator className="my-1" />
                    {data.abilities.map((ability) => (
                      <p key={ability} className="mb-1 leading-4">
                        {ability}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-xl text-transparent">
                      Hidden
                    </p>
                    <Separator className="my-1" />
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
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
                      Specials
                    </p>
                  </div>
                </div>
                <div className="grid h-full w-full grid-cols-2 place-content-center gap-2">
                  <div
                    className={cn(
                      "rounded-lg px-3 py-1 text-center font-rowdies text-lg",
                      data.isLegendary
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-accent",
                    )}
                  >
                    Legendary
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-1 text-center font-rowdies text-lg",
                      data.isMythical
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-accent",
                    )}
                  >
                    Mythical
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-1 text-center font-rowdies text-lg",
                      data.canGmax
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-accent",
                    )}
                  >
                    G Max
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-1 text-center font-rowdies text-lg",
                      data.canSwitchForm
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-accent",
                    )}
                  >
                    Switch Form
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-1 text-center font-rowdies text-lg",
                      data.canMegaEvolve
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-accent",
                    )}
                  >
                    Mega Evolution
                  </div>
                  <div
                    className={cn(
                      "rounded-lg px-3 py-1 text-center font-rowdies text-lg",
                      data.haveGenderDifference
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                        : "bg-accent",
                    )}
                  >
                    Gender Difference
                  </div>
                </div>
              </article>
              <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
                <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
                  <div className="rounded-full bg-accent px-2">
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
                      Location
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center gap-10">
                  <div className="flex flex-col items-center justify-center">
                    <LandPlotIcon />
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-xl text-transparent">
                      Region
                    </p>
                    <Separator />
                    <p className="text-lg">{data.region}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <MapPinnedIcon />
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text font-rowdies text-xl text-transparent">
                      Habitat
                    </p>
                    <Separator />
                    <p className="text-lg">{data.habitat}</p>
                  </div>
                </div>
              </article>
              <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
                <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
                  <div className="rounded-full bg-accent px-2">
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
                      Egg Group
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex h-full flex-wrap items-center justify-center gap-3">
                  {data.eggGroups.map((egg) => (
                    <Badge key={`egg-${egg}`} className="text-base">
                      {egg}
                    </Badge>
                  ))}
                </div>
              </article>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="stat" className="w-full">
          <section className="w-full grid-cols-2 rounded-t-xl border-t-4 bg-accent p-4">
            <article className="flex flex-col items-center rounded-lg border-4 bg-background p-1 px-3 pb-2">
              <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
                <div className="rounded-full bg-accent px-2">
                  <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
                    Statistics
                  </p>
                </div>
              </div>
              <div className="mb-5 flex w-full flex-col gap-5">
                {data.basestats.map((stat) => (
                  <div
                    key={stat.name}
                    className="grid w-full grid-cols-[6.5rem_1fr_3rem] font-rowdies text-lg"
                  >
                    <div className="text-center leading-4">{stat.name}</div>
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
            <div className="grid grid-cols-2">
              <article className="mt-8 flex flex-col items-center rounded-lg border-4 bg-background p-1 pb-2">
                <div className="relative -translate-y-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-[3px]">
                  <div className="rounded-full bg-accent px-2">
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
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
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
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
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
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
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
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
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
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
                    <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
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
            </div>
          </section>
        </TabsContent>
        <TabsContent value="form" className="w-full">
          <section className="w-full grid-cols-2 rounded-t-xl border-t-4 bg-accent p-4">
            <EvolutionFroms
              evolution={data.evolutionChain}
              type1={type1}
              type2={type2}
            />
            <AlternateForms varieties={data.varieties} />
          </section>
        </TabsContent>
        <TabsContent value="moves" className="w-full">
          <section className="grid w-full grid-cols-3 gap-2 rounded-t-xl border-t-4 bg-accent p-4">
            {data.moves.map((move) => (
              <Moves key={`move-${move.id}`} move={move} />
            ))}
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
};

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
          <p className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-center font-rowdies text-xl font-bold text-transparent">
            Evolution Chain
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 px-3">
        {evolution.map((evo) => (
          <div
            key={evo.id}
            className="flex w-full overflow-hidden rounded-lg bg-accent"
          >
            {evo.details.length > 0 && (
              <div className="flex items-center justify-center gap-4 p-2">
                {evo.details.map((detail: EvolutionDetails) => (
                  <div
                    key={`evo-${detail.level}`}
                    className="flex flex-col gap-1 rounded-md border border-purple-500 p-1"
                  >
                    {detail.time && (
                      <p className="text-center font-rowdies">
                        Time: {detail.time}
                      </p>
                    )}
                    {detail.level && (
                      <p className="text-center font-rowdies">
                        Level: {detail.level}
                      </p>
                    )}
                    {detail.trigger && (
                      <p className="text-center font-rowdies">
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
              <div className="h-64 w-64">
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
              <div className="flex flex-grow flex-col items-center justify-center gap-2">
                <p className="font-rowdies text-4xl text-slate-700 before:content-['#']">
                  {evo.id}
                </p>
                <p className="font-rowdies text-5xl">{evo.name}</p>
                <div className="flex gap-2">
                  {evo.types.map((type: string) => (
                    <TypeBadge key={type} type={type} size="w-10 h-10" />
                  ))}
                </div>
                <Link href={`/pokedex/pokemon/${evo.id}`} className="text-lg">
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
      <p className="font-rowdies text-2xl text-gray-600 before:content-['#']">
        {move.id}
      </p>
      <p className="break-words font-rowdies text-4xl text-white">
        {move.name}
      </p>
      <Link href={`/pokedex/move/${move.id}`} className="text-lg">
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

export default MediumScreen;
