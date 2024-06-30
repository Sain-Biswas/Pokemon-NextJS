import TypeBadge from "@/components/global/TypeBadge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { SinglePokemon } from "@/models/SinglePokemon";
import Image from "next/image";
import React from "react";
import ShinyIcon from "@/../public/Global/shiny.png";
import {
  ArrowLeftRightIcon,
  EllipsisVerticalIcon,
  InfoIcon,
  SwordsIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import TypeIcons from "../../../../../../public/TypeIcon/exporter";
import Link from "next/link";
import { RefMove } from "@/models/Common";

export default function TopLargeScreen({
  pokemon,
  type1,
  type2,
}: {
  pokemon: SinglePokemon;
  type1: string;
  type2: string;
}) {
  return (
    <section className="relative w-screen overflow-hidden font-serif text-black">
      <article className={cn("", type1)}>
        <div className="">
          <div className="_category _left-containers _skew-plus">
            <div className="_skew-minus">
              <span className="font-rowdies">Category: </span>
              <span>{pokemon.genus}</span>
            </div>
            <p className="_left-border"></p>
          </div>
          <div className="_strip-name-bg _skew-plus _left-containers">
            <p className="_left-border"></p>
          </div>
          <div className="relative">
            <div className="_name-bg _left-containers _skew-plus">
              <div className="_left-border _number-bg _skew-minus"></div>
              <p className="_left-border"></p>
            </div>
            <div className="_name-bg _left-containers _skew-minus">
              <div className="_left-border _number-bg _skew-plus"></div>
              <p className="_left-border"></p>
            </div>
            <span className="_name-text font-rowdies">{pokemon.name}</span>
            <span className="_number-text font-rowdies">{pokemon.id}</span>
          </div>
          <div className="_strip-name-bg _skew-minus _left-containers">
            <p className="_left-border"></p>
          </div>
          <div className="_type _skew-minus _left-containers">
            <p className="_left-border"></p>
            <div className="_type-card">
              {pokemon.types.map((type) => (
                <TypeBadge type={type} key={type} size="h-[2.5vw] w-[2.5vw]" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[0.5vw]">
          <div className="_abilities _left-containers _skew-minus relative">
            <p className="_left-border"></p>
            <div className="_skew-plus">
              <span className="font-rowdies">Abilities: </span>
              <span>{pokemon.abilities.join("/")}</span>
            </div>
          </div>
          <div className="_hidden-abilities _left-containers _skew-minus relative">
            <p className="_left-border"></p>
            <div className="_skew-plus">
              <span className="font-rowdies">Hidden: </span>
              <span>{pokemon.hiddenAbilities.join("/")}</span>
            </div>
          </div>
        </div>

        <div className="mt-[0.5vw]">
          <div className="_height _left-containers _skew-minus relative">
            <p className="_left-border"></p>
            <div className="_skew-plus">
              <span className="font-rowdies">Height: </span>
              <span>{pokemon.height}</span>
            </div>
          </div>
          <div className="_weight _left-containers _skew-minus relative">
            <p className="_left-border"></p>
            <div className="_skew-plus">
              <span className="font-rowdies">Weight: </span>
              <span>{pokemon.weight}</span>
            </div>
          </div>
        </div>

        <div className="mt-[0.5vw]">
          <div className="_gender _left-containers _skew-plus relative">
            <p className="_left-border"></p>
            <div className="_skew-minus flex items-center">
              <span className="font-rowdies">Gender: </span>
              <span className="flex items-center">
                {" "}
                <span className="flex items-center font-rowdies text-3xl font-extrabold text-blue-600">
                  &#9794;
                </span>{" "}
                {100 - (pokemon.genderRate / 8) * 100}{" "}
                <span className="flex items-center font-rowdies text-3xl font-extrabold text-pink-600">
                  &#9792;
                </span>{" "}
                {(pokemon.genderRate / 8) * 100}
              </span>
            </div>
          </div>
          <div className="_egg-group _left-containers _skew-plus relative">
            <p className="_left-border"></p>
            <div className="_skew-minus">
              <span className="font-rowdies">Egg Type: </span>
              <span>{pokemon.eggGroups.join("/")}</span>
            </div>
          </div>
        </div>

        <div className="mt-[0.5vw]">
          <div className="_base-stat _left-containers _skew-plus relative">
            <p className="_left-border"></p>
            <div className="_skew-minus">
              <span className="font-rowdies">Base Statistics</span>
            </div>
          </div>
          <div className="relative">
            <div className="_base-stat-second _left-containers _skew-plus relative">
              <p className="_left-border"></p>
            </div>
            <div className="_base-stat-second _left-containers _skew-minus relative">
              <p className="_left-border"></p>
            </div>
            <div className="_stat-container absolute font-rowdies">
              {pokemon.basestats.map((basestat) => (
                <div key={basestat.name} className="_single-stat">
                  <div className="text-center">{basestat.name}</div>
                  <Progress
                    value={(basestat.value / 255) * 100}
                    style={{
                      background: `linear-gradient(to bottom, var(--${type1}), var(--${type1}))`,
                    }}
                    className="my-auto"
                  />
                  <div className="text-center">{basestat.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="_base-stat _left-containers _skew-minus relative">
            <p className="_left-border"></p>
            <div className="_skew-plus">
              <span className="font-rowdies">Shape : </span>
              <span>{pokemon.shape}</span>
            </div>
          </div>
        </div>
      </article>

      <article className={cn("_right-part absolute", type2)}>
        <div className="_right-containers _specials-strip _skew-minus">
          <p className="_left-border"></p>
          <p className="_left-border"></p>
        </div>
        <div className="relative">
          <div className="_right-containers _skew-minus _specials-bg">
            <p className="_left-border"></p>
            <h6 className="_left-border"></h6>
          </div>
          <div className="_right-containers _skew-plus _specials-bg">
            <p className="_left-border"></p>
            <h6 className="_left-border"></h6>
          </div>
          <div className="_specials-badge">
            <div
              className={cn(
                "flex items-center justify-center rounded-md text-center font-rowdies text-lg leading-5 text-white",
                pokemon.isLegendary
                  ? "bg-gradient-to-br from-purple-500 to-blue-500"
                  : "bg-slate-500",
              )}
            >
              Legendary
            </div>
            <div
              className={cn(
                "flex items-center justify-center rounded-md text-center font-rowdies text-lg leading-5 text-white",
                pokemon.isMythical
                  ? "bg-gradient-to-br from-purple-500 to-blue-500"
                  : "bg-slate-500",
              )}
            >
              Mythical
            </div>
            <div
              className={cn(
                "flex items-center justify-center rounded-md text-center font-rowdies text-lg leading-5 text-white",
                pokemon.canGmax
                  ? "bg-gradient-to-br from-purple-500 to-blue-500"
                  : "bg-slate-500",
              )}
            >
              G Max
            </div>
            <div
              className={cn(
                "flex items-center justify-center rounded-md text-center font-rowdies text-lg leading-5 text-white",
                pokemon.canSwitchForm
                  ? "bg-gradient-to-br from-purple-500 to-blue-500"
                  : "bg-slate-500",
              )}
            >
              Switch Form
            </div>
            <div
              className={cn(
                "flex items-center justify-center rounded-md text-center font-rowdies text-lg leading-5 text-white",
                pokemon.canMegaEvolve
                  ? "bg-gradient-to-br from-purple-500 to-blue-500"
                  : "bg-slate-500",
              )}
            >
              Mega Evolution
            </div>
            <div
              className={cn(
                "flex items-center justify-center rounded-md text-center font-rowdies text-lg leading-5 text-white",
                pokemon.haveGenderDifference
                  ? "bg-gradient-to-br from-purple-500 to-blue-500"
                  : "bg-slate-500",
              )}
            >
              Gender Difference
            </div>
          </div>
          <div className="_specials-badge-icon">
            <EllipsisVerticalIcon className="h-10 w-10" />
          </div>
        </div>
        <div className="_right-containers _specials-strip _skew-plus">
          <p className="_left-border"></p>
          <p className="_left-border"></p>
        </div>
        <div className="_right-containers _specials-strip _skew-minus mt-[3vw]">
          <p className="_left-border"></p>
          <p className="_left-border"></p>
        </div>
        <div className="relative">
          <div className="_right-containers _skew-minus _specials-bg">
            <p className="_left-border"></p>
            <h6 className="_left-border"></h6>
          </div>
          <div className="_right-containers _skew-plus _specials-bg">
            <p className="_left-border"></p>
            <h6 className="_left-border"></h6>
          </div>
          <div className="_shiny-image">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemon.id}.png`}
              alt=""
              width={475}
              height={475}
              className="object-contain"
            />
          </div>
          <div className="_shiny-icon">
            <Image
              src={ShinyIcon}
              alt=""
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
        <div className="_right-containers _specials-strip _skew-plus">
          <p className="_left-border"></p>
          <p className="_left-border"></p>
        </div>
      </article>

      <article className="_center-div absolute flex flex-col items-center justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt=""
          width={475}
          height={475}
          className="object-contain"
          style={{
            filter: `drop-shadow(${pokemon.color} 10px 10px 10px) contrast(120%)`,
          }}
        />
        <div className="grid grid-cols-3 gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 font-rowdies text-lg dark:text-white"
              >
                <InfoIcon className="h-6 w-6" />
                <p>Details</p>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="flex flex-row items-center gap-4 font-rowdies text-3xl">
                <InfoIcon className="h-8 w-8" />
                <p>Details</p>
              </DialogHeader>
              <ScrollArea className="h-96">
                {pokemon.flavourText.map(
                  (flavour) =>
                    flavour && (
                      <Card className="mb-2">
                        <CardHeader>{flavour}</CardHeader>
                      </Card>
                    ),
                )}
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 font-rowdies text-lg dark:text-white"
              >
                <SwordsIcon className="h-6 w-6" />
                <p>Moves</p>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] max-w-[80vw]">
              <DialogHeader className="flex flex-row items-center gap-2">
                <SwordsIcon className="h-6 w-6" />
                <p className="font-rowdies text-3xl">Moves</p>
              </DialogHeader>
              <ScrollArea className="h-[80vh] w-full">
                <div className="grid grid-cols-4 gap-2">
                  {pokemon.moves.map((move) => (
                    <Moves key={move.id} move={move} />
                  ))}
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 font-rowdies text-lg dark:text-white"
              >
                <ArrowLeftRightIcon className="h-6 w-6" />
                <p>Relations</p>
              </Button>
            </DialogTrigger>
            <DialogContent>Hello</DialogContent>
          </Dialog>
        </div>
      </article>
    </section>
  );
}

function Moves({ move }: { move: RefMove }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-xl p-2"
      style={{ backgroundColor: `var(--${move.type})` }}
    >
      <p className="font-rowdies text-xl text-gray-300 before:content-['#']">
        {move.id}
      </p>
      <p className="font-rowdies text-2xl text-white">{move.name}</p>
      <Link href={`/pokedex/move/${move.id}`} className="text-sm">
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
