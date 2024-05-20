import MoveListModel from "@/models/MoveList";
import dbConnect from "../dbConnection";

export default async function moveListFetch() {
    await dbConnect();
    const data = await MoveListModel.find({}, { _id: 0 }).sort({ id: 'asc' })
    return data;
}