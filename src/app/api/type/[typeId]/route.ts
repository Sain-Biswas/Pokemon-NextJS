import dbConnect from "@/lib/dbConnection";
import singleTypeFetch from "@/lib/functions/SingleType";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const id = request.url.split('type/')[1];
    await dbConnect();

    const type = await singleTypeFetch(id);

    return NextResponse.json(type[0]);
}