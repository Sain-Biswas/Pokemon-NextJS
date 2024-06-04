import mongoose, { Schema, Document } from "mongoose";

export interface PokemonList extends Document {
  id: number;
  name: string;
  types: string[];
}

const PokemonListSchema: Schema<PokemonList> = new Schema({
  id: Number,
  name: String,
  types: [String],
});

const PokemonListModel =
  mongoose.models?.PokemonList ||
  mongoose.model("PokemonList", PokemonListSchema, "PokemonList");

export default PokemonListModel;
