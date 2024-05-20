import mongoose, { Schema, Document } from "mongoose";
import { RefPokemon, RefPokemonSchema } from './Common';

interface Introduced extends Document {
    _id: boolean,
    id: number,
    name: string
}

const IntroducedSchema: Schema<Introduced> = new Schema({
    _id: false,
    id: Number,
    name: String
});

interface Meta extends Document {
    _id: boolean,
    ailment: string,
    ailmentChance: number,
    category: string,
    critRate: number,
    drain: number,
    flinchChance: number,
    healing: number,
    maxHits: number,
    maxTurns: number,
    minHits: number,
    minTurns: number,
    statChance: number
}

const MetaSchema: Schema<Meta> = new Schema({
    _id: false,
    ailment: String,
    ailmentChance: Number,
    category: String,
    critRate: Number,
    drain: Number,
    flinchChance: Number,
    healing: Number,
    maxHits: Number,
    maxTurns: Number,
    minHits: Number,
    minTurns: Number,
    statChance: Number
});

interface StatChanges extends Document {
    _id: boolean,
    change: number,
    name: string
}

const StatChangesSchema: Schema<StatChanges> = new Schema({
    _id: false,
    change: Number,
    name: String
})

export interface SingleMove extends Document {
    accuracy: number,
    contestType: string,
    damageClass: string,
    effectChance: number | undefined,
    effectEntries: string[],
    flavourText: string[],
    id: number,
    introduced: Introduced,
    meta: Meta,
    name: string,
    pokemons: RefPokemon[],
    power: number,
    pp: number,
    priority: number,
    statChanges: StatChanges[],
    target: string,
    type: string
}

const SingleMoveSchema: Schema<SingleMove> = new Schema({
    accuracy: Number,
    contestType: String,
    damageClass: String,
    effectChance: Number,
    effectEntries: [String],
    flavourText: [String],
    id: Number,
    introduced: IntroducedSchema,
    meta: MetaSchema,
    name: String,
    pokemons: [RefPokemonSchema],
    power: Number,
    pp: Number,
    priority: Number,
    statChanges: [StatChangesSchema],
    target: String,
    type: String
});

const SingleMoveModel = mongoose.models?.SingleMove || mongoose.model("SingleMove", SingleMoveSchema, "SingleMove");

export default SingleMoveModel;