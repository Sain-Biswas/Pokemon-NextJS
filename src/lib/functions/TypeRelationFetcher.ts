import TypeModel, { Type } from "@/models/Type";
import dbConnect from "../dbConnection";

export default async function TypeRelationFetcher(types: string[]) {
  types = types.map((type) => {
    return type[0].toUpperCase() + type.slice(1);
  });

  const doubleDamageFrom: string[] = [];
  const doubleDamageTo: string[] = [];
  const halfDamageFrom: string[] = [];
  const halfDamageTo: string[] = [];
  const noDamageFrom: string[] = [];
  const noDamageTo: string[] = [];

  await dbConnect();

  for (let type of types) {
    const data: Type[] = await TypeModel.find({}).where("name").equals(type);
    const typeData = data[0];
    typeData.doubleDamageFrom.forEach((type) => {
      if (!doubleDamageFrom.includes(type)) doubleDamageFrom.push(type);
    });
    typeData.doubleDamageTo.forEach((type) => {
      if (!doubleDamageTo.includes(type)) doubleDamageTo.push(type);
    });
    typeData.halfDamageFrom.forEach((type) => {
      if (!halfDamageTo.includes(type)) halfDamageFrom.push(type);
    });
    typeData.halfDamageTo.forEach((type) => {
      if (!halfDamageTo.includes(type)) halfDamageTo.push(type);
    });
    typeData.noDamageFrom.forEach((type) => {
      if (!noDamageFrom.includes(type)) noDamageFrom.push(type);
    });
    typeData.noDamageTo.forEach((type) => {
      if (!noDamageTo.includes(type)) noDamageTo.push(type);
    });
  }

  return {
    doubleDamageFrom,
    doubleDamageTo,
    halfDamageFrom,
    halfDamageTo,
    noDamageFrom,
    noDamageTo,
  };
}
