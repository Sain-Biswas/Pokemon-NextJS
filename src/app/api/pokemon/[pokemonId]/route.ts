import dbConnect from "@/lib/dbConnection";
import SinglePokemonModel, { SinglePokemon } from "@/models/SinglePokemon";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const id = request.url.split('pokemon/')[1];
    await dbConnect();

    const pokemon = await SinglePokemonModel.find({}, { _id: 0 }).where('id').equals(id);

    return NextResponse.json(pokemon);
}