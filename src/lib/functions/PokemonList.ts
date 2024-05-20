import PokemonList from "@/models/PokemonList";
import dbConnect from "../dbConnection";

const pokemonListFetch = async () => {
    await dbConnect();
    const data = await PokemonList.find({}).sort({ id: 'asc' });
    return data;
}

export default pokemonListFetch;