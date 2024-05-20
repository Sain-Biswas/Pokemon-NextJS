import mongoose, { Schema, Document } from "mongoose";
import { RefMove, RefMoveSchema, RefPokemon, RefPokemonSchema } from "./Common";


interface EvolutionDetails extends Document {
    _id: boolean,
    level: number,
    time: string,
    trigger: string
}

const EvolutionDetailsSchema: Schema<EvolutionDetails> = new Schema({
    _id: false,
    level: Number,
    time: String,
    trigger: String
});

interface EvolutionChain extends Document {
    details: EvolutionDetails[],
    _id: boolean,
    id: number,
    name: string,
    types: string[]
}

const EvolutionChainSchema: Schema<EvolutionChain> = new Schema({
    _id: false,
    id: Number,
    details: [EvolutionDetailsSchema],
    name: String,
    types: [String]
});

interface BaseStats extends Document {
    _id: boolean,
    name: string,
    value: number
}

const BaseStatsSchema: Schema<BaseStats> = new Schema({
    _id: false,
    name: String,
    value: Number
});

export interface SinglePokemon extends Document {
    id: number,
    name: string,
    types: string[],
    habitat: string,
    color: string,
    shape: string,
    genderRate: number,
    canSwitchForm: boolean,
    haveGenderDifference: boolean,
    canMegaEvolve: boolean,
    canGMax: boolean,
    evolutionChain: EvolutionChain[],
    abilities: string[],
    hiddenAbilities: string[],
    region: string,
    basestats: BaseStats[],
    weight: number
    height: number,
    varieties: RefPokemon[],
    moves: RefMove,
    isLegendary: boolean,
    isMythical: boolean,
    eggGroups: string[],
    flavourText: string[],
    genus: string,
}

const SinglePokemonSchema: Schema<SinglePokemon> = new Schema({
    id: Number,
    name: String,
    types: [String],
    habitat: String,
    color: String,
    shape: String,
    genderRate: Number,
    canSwitchForm: Boolean,
    haveGenderDifference: Boolean,
    canMegaEvolve: Boolean,
    canGMax: Boolean,
    evolutionChain: [EvolutionChainSchema],
    abilities: [String],
    hiddenAbilities: [String],
    region: String,
    basestats: [BaseStatsSchema],
    height: Number,
    weight: Number,
    varieties: [RefPokemonSchema],
    moves: [RefMoveSchema],
    isLegendary: Boolean,
    isMythical: Boolean,
    eggGroups: [String],
    flavourText: [String],
    genus: String,
});

const SinglePokemonModel = mongoose.models?.SinglePokemon || mongoose.model("SinglePokemon", SinglePokemonSchema, "SinglePokemon");

export default SinglePokemonModel;