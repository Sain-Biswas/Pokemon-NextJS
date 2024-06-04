import mongoose, { Schema, Document } from "mongoose";

export interface RefMove extends Document {
  _id: boolean;
  id: number;
  name: string;
  type: string;
}

export const RefMoveSchema: Schema<RefMove> = new Schema({
  _id: false,
  id: Number,
  name: String,
  type: String,
});

export interface RefPokemon extends Document {
  _id: boolean;
  id: number;
  name: string;
  types: string[];
}

export const RefPokemonSchema: Schema<RefPokemon> = new Schema({
  _id: false,
  id: Number,
  name: String,
  types: [String],
});
