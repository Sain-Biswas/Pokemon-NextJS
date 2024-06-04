import mongoose, { Schema, Document } from "mongoose";

export interface MoveList extends Document {
  id: number;
  name: string;
  type: string;
  contestType: string;
  damageClass: string;
}

const MoveListSchema: Schema<MoveList> = new Schema({
  id: Number,
  name: String,
  type: String,
  contestType: String,
  damageClass: String,
});

const MoveListModel =
  mongoose.models?.MoveList ||
  mongoose.model("MoveList", MoveListSchema, "MoveList");

export default MoveListModel;
