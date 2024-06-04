import { PokemonList } from "@/models/PokemonList";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import TypeBadge from "@/components/global/TypeBadge";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PokemonCardProps {
    pokemon: PokemonList,
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const [type1, type2] = (pokemon.types.length == 2) ? [pokemon.types[0], pokemon.types[1]] : [pokemon.types[0], pokemon.types[0]];

    return (
        <article className="group/pokecard w-full text-white rounded-xl p-2 lg:p-4 flex border-4 items-center justify-center md:flex-col md:w-64 lg:w-80" style={{ backgroundImage: `linear-gradient(to top right, var(--${type1}), var(--${type2}))` }}>
            <p className="before:content-['#'] font-rowdies hidden md:block text-4xl lg:text-5xl text-gray-600">{pokemon.id}</p>
            <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 group-hover/pokecard:scale-125">
                <AspectRatio ratio={1 / 1} className="">
                    <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" width={475} height={475} loading="lazy" className="object-contain drop-shadow-2xl" />
                </AspectRatio>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center gap-2 lg:gap-4">
                <p className="before:content-['#'] md:hidden text-xl sm:text-3xl font-rowdies text-gray-600 leading-4">{pokemon.id}</p>
                <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-rowdies font-bold">{pokemon.name}</p>
                <div className="flex gap-2">
                    {
                        pokemon.types.map((type) => (
                            <TypeBadge key={type} type={type} />
                        ))
                    }
                </div>
                <Button size='sm' variant='link' className="text-base sm:text-xl lg:text-2xl text-white">
                    <Link href={`/pokedex/pokemon/${pokemon.id}`}>
                        Learn more...
                    </Link>
                </Button>
            </div>
        </article>
    )
}

export default PokemonCard;