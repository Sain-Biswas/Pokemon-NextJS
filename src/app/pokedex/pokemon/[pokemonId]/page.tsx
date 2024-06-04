import { SinglePokemon } from "@/models/SinglePokemon";
import singlePokemonFetch from "@/lib/functions/SinglePokemon";

import SmallScreen from "./components_small/SmallScreen";
import MediumScreen from "./components-medium/MediumScreen";
import LargeScreen from "./components-large/LargeScreen";
import TypeRelationFetcher from "@/lib/functions/TypeRelationFetcher";

interface PageParams {
  pokemonId: string;
}

const Page = async ({ params }: { params: PageParams }) => {
  const pokemon: SinglePokemon[] | any[] = await singlePokemonFetch(
    params.pokemonId,
  );
  const typeRelations = await TypeRelationFetcher(pokemon[0].types);

  return (
    <>
      <SmallScreen
        pokemon={JSON.stringify(pokemon[0])}
        typeRelations={typeRelations}
      />
      <MediumScreen
        pokemon={JSON.stringify(pokemon[0])}
        typeRelations={typeRelations}
      />
      <LargeScreen
        pokemon={JSON.stringify(pokemon[0])}
        typeRelations={typeRelations}
      />
    </>
  );
};

export default Page;

/*
<section className='flex-grow flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4'>
                    <article className='flex flex-wrap justify-center gap-3 font-sans'>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <RulerIcon className='' />
                            <p className='font-bold text-center'>Height</p>
                            <Separator />
                            <p className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{data.height}</p>
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <WeightIcon className='' />
                            <p className='font-bold text-center'>Weight</p>
                            <Separator />
                            <p className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{data.weight}</p>
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <PaletteIcon className='' />
                            <p className='font-bold text-center'>Colour</p>
                            <Separator />
                            <p className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{data.color}</p>
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <ShapesIcon className='' />
                            <p className='font-bold text-center'>Shape</p>
                            <Separator />
                            <p className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{data.shape}</p>
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <MapPinnedIcon className='' />
                            <p className='font-bold text-center'>Habitat</p>
                            <Separator />
                            <p className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{data.habitat}</p>
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <LandPlotIcon className='' />
                            <p className='font-bold text-center'>Region</p>
                            <Separator />
                            <p className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{data.region}</p>
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <FlowerIcon className='' />
                            <p className='font-bold text-center'>Ability</p>
                            <Separator />
                            {
                                data.abilities.map((item) => (
                                    <p key={item} className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{item}</p>
                                ))
                            }
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <ShieldOffIcon className='' />
                            <p className='font-bold text-center'>Hidden Ability</p>
                            <Separator />
                            {
                                data.hiddenAbilities.map((item) => (
                                    <p key={item} className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{item}</p>
                                ))
                            }
                        </div>
                        <div className='flex flex-col items-center p-1 border-2 w-28 rounded-xl justify-center'>
                            <EggIcon className='' />
                            <p className='font-bold text-center'>Egg Groups</p>
                            <Separator />
                            {
                                data.eggGroups.map((item) => (
                                    <p key={item} className='font-bold text-center bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>{item}</p>
                                ))
                            }
                        </div>
                    </article>
                    <article className='flex justify-center items-center flex-wrap gap-3'>
                        <div className={cn("py-1 px-2 font-rowdies font-bold text-white text-lg rounded-xl", data.canSwitchForm ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gradient-to-r from-slate-500 to-gray-400")}>
                            Switch Form
                        </div>
                        <div className={cn("py-1 px-2 font-rowdies font-bold text-white text-lg rounded-xl", data.haveGenderDifference ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gradient-to-r from-slate-500 to-gray-400")}>
                            Gender Difference
                        </div>
                        <div className={cn("py-1 px-2 font-rowdies font-bold text-white text-lg rounded-xl", data.canMegaEvolve ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gradient-to-r from-slate-500 to-gray-400")}>
                            Mega Evolution
                        </div>
                        <div className={cn("py-1 px-2 font-rowdies font-bold text-white text-lg rounded-xl", data.isLegendary ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gradient-to-r from-slate-500 to-gray-400")}>
                            Legendary
                        </div>
                        <div className={cn("py-1 px-2 font-rowdies font-bold text-white text-lg rounded-xl", data.isMythical ? "bg-gradient-to-r from-purple-500 to-blue-500" : "bg-gradient-to-r from-slate-500 to-gray-400")}>
                            Mythical
                        </div>
                    </article>
                </section>
*/
