import mongoose, { Schema, Document } from "mongoose";

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
    evolutionChain: { details: { level: number, time: string, trigger: string }[], id: number, name: string, types: string[] }[],
    abilities: string[],
    hiddenAbilities: string[],
    region: string,
    basestats: { name: string, value: number }[],
    weight: number
    height: number,
    varieties: { id: number, name: string, types: string[] }[],
    moves: { id: number, name: string, type: string },
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
    evolutionChain: [{
        details: [{
            _id: false,
            level: Number,
            time: String,
            trigger: String
        }],
        _id: false,
        id: Number,
        name: String,
        types: [String]
    }],
    abilities: [String],
    hiddenAbilities: [String],
    region: String,
    basestats: [{
        name: String,
        value: Number
    }],
    height: Number,
    weight: Number,
    varieties: [{
        _id: false,
        id: Number,
        name: String,
        types: [String]
    }],
    moves: [{
        _id: false,
        id: Number,
        name: String,
        type: String
    }],
    isLegendary: Boolean,
    isMythical: Boolean,
    eggGroups: [String],
    flavourText: [String],
    genus: String,
});

const SinglePokemonModel = mongoose.models?.SinglePokemon || mongoose.model("SinglePokemon", SinglePokemonSchema, "SinglePokemon");

export default SinglePokemonModel;