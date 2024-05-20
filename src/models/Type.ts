import mongoose, { Schema, Document } from "mongoose";
import { RefMove, RefMoveSchema, RefPokemon, RefPokemonSchema } from "./Common";

export interface Type extends Document {
    damageClass: string,
    doubleDamageFrom: string[],
    doubleDamageTo: string[],
    halfDamageFrom: string[],
    halfDamageTo: string[],
    id: number,
    moves: RefMove[],
    name: string,
    noDamageFrom: string[],
    noDamageTo: string[],
    pokemon: RefPokemon[]
}

const TypeSchema: Schema<Type> = new Schema({
    damageClass: String,
    doubleDamageFrom: [String],
    doubleDamageTo: [String],
    halfDamageFrom: [String],
    halfDamageTo: [String],
    id: Number,
    moves: [RefMoveSchema],
    name: String,
    noDamageFrom: [String],
    noDamageTo: [String],
    pokemon: [RefPokemonSchema]
});

const TypeModel = mongoose.models?.Types || mongoose.model("Types", TypeSchema, "Types");

export default TypeModel;