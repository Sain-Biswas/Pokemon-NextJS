import PokemonList from "@/models/PokemonList";
import dbConnect from "../dbConnection";

export default async function pokemonListFetch() {
    await dbConnect();
    const data = await PokemonList.find({}).sort({ id: 'asc' });
    return data;
}