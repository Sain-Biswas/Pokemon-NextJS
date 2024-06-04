import dbConnect from "../dbConnection";
import TypeModel from "@/models/Type";

export default async function typeListFetch() {
  await dbConnect();
  const data = await TypeModel.find({}, { _id: 0 }).sort({ id: "asc" });
  return data;
}
