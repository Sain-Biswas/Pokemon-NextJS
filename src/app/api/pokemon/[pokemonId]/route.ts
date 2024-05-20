import dbConnect from "@/lib/dbConnection";
import singlePokemonFetch from "@/lib/functions/SinglePokemon";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const id = request.url.split('pokemon/')[1];
    await dbConnect();

    const pokemon = await singlePokemonFetch(id);

    return NextResponse.json(pokemon[0]);
}