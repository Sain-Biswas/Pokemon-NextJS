import TypeModel from "@/models/Type";
import dbConnect from "../dbConnection";

export default async function singleTypeFetch(name: string) {
  name = name[0].toUpperCase() + name.slice(1);
  await dbConnect();
  const data = await TypeModel.find({}, { _id: 0 }).where("name").equals(name);
  return data;
}
