import dbConnect from "@/lib/dbConnection";
import typeListFetch from "@/lib/functions/TypeList";
import { Type } from "@/models/Type";
import { NextResponse } from "next/server";


export async function GET() {
    await dbConnect();

    const data: Type[] = await typeListFetch();
    const res = data.map((item: Type) => {
        const { id, name, damageClass } = item;
        return { id, name, damageClass, pokemon: item.pokemon.length, moves: item.moves.length }
    })

    return NextResponse.json(res);
}