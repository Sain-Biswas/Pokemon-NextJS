import dbConnect from "@/lib/dbConnection";
import moveListFetch from "@/lib/functions/MoveList";
import { NextResponse } from "next/server";


export async function GET() {
    await dbConnect();

    const data = await moveListFetch();

    return NextResponse.json(data);
}