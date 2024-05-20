import SinglePokemonModel from "@/models/SinglePokemon";
import dbConnect from "../dbConnection";

export default async function singlePokemonFetch(id: string) {
    const newId = Number.parseInt(id);
    await dbConnect();
    const data = await SinglePokemonModel.find({}, { _id: false }).where('id').equals(newId);
    return data;
}