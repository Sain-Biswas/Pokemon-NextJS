import pokemonListFetch from "@/lib/functions/PokemonList";
import { PokemonList } from "@/models/PokemonList";
import React from "react";
import PokeFilterList from "./components/PokeFilterList";

const Page = async () => {
  const pokemons: PokemonList[] = await pokemonListFetch();

  return (
    <main className="min-h-screen">
      <PokeFilterList propsData={JSON.stringify(pokemons)} />
    </main>
  );
};

export default Page;
