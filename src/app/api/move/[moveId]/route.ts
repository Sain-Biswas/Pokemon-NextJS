import dbConnect from "@/lib/dbConnection";
import singleMoveFetch from "@/lib/functions/SingleMove";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const id = request.url.split('move/')[1];
    await dbConnect();

    const move = await singleMoveFetch(id);

    return NextResponse.json(move[0]);
}