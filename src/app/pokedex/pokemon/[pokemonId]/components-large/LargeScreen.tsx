import { SinglePokemon } from "@/models/SinglePokemon";

interface SubComponentProps {
  pokemon: string;
  typeRelations: {
    doubleDamageFrom: string[];
    doubleDamageTo: string[];
    halfDamageFrom: string[];
    halfDamageTo: string[];
    noDamageFrom: string[];
    noDamageTo: string[];
  };
}

const LargeScreen: React.FC<SubComponentProps> = ({
  pokemon,
  typeRelations,
}) => {
  const data: SinglePokemon = JSON.parse(pokemon);
  const [type1, type2] =
    data.types.length == 2
      ? [data.types[0], data.types[1]]
      : [data.types[0], data.types[0]];
  const {
    doubleDamageFrom,
    doubleDamageTo,
    halfDamageFrom,
    halfDamageTo,
    noDamageFrom,
    noDamageTo,
  } = typeRelations;

  return <main className="hidden lg:block">Large Screen</main>;
};

export default LargeScreen;
