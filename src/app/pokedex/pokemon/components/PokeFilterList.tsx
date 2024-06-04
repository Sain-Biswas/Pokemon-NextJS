'use client';

import { useMemo, useState } from "react";
import { motion } from 'framer-motion';
import { PokemonList } from "@/models/PokemonList";
import PokemonCard from "./PokemonCard";

interface PokeFilterListProps {
    propsData: string,
}

const PokeFilterList: React.FC<PokeFilterListProps> = ({ propsData }) => {
    const [type, setType] = useState<string>('');
    const data: PokemonList[] = JSON.parse(propsData);

    const filteredData = useMemo(() => {
        if (type === '') return data;
        else return data.filter((pokemon) => pokemon.types.includes(type));
    }, [type]);


    return (
        <>
            <aside className="">
                <div className="">
                    <p className="font-rowdies">Pokemons</p>
                    <motion.div className="text-transparent h-[2px] bg-gradient-to-r from-purple-500 to-blue-200">.</motion.div>
                </div>
                <div className="">
                    <div className="">

                    </div>
                </div>
            </aside>
            <div className="p-1 flex flex-col md:flex-row md:justify-center flex-wrap gap-2 md:gap-3 lg:gap-4">
                {
                    filteredData.map((pokemon) => (
                        <PokemonCard key={`pokemon-${pokemon.id}`} pokemon={JSON.parse(JSON.stringify(pokemon))} />
                    ))
                }
            </div>
        </>
    )
}

export default PokeFilterList