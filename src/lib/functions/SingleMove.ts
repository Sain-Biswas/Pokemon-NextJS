import SingleMoveModel from "@/models/SingleMove";
import dbConnect from "../dbConnection";

export default async function singleMoveFetch(id: string) {
    const newId = Number.parseInt(id);
    await dbConnect();
    const data = await SingleMoveModel.find({}, { _id: 0 }).where('id').equals(newId);
    return data;
}