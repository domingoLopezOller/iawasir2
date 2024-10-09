import { useParams } from "react-router-dom";
import { PokemonDetail } from "../../components/PokemonDetail/PokemonDetail";
import { usePokemon } from "../../hooks/usePokemon";

export const Details = () => {
  const { pokemonId } = useParams();
  const { pokemon } = usePokemon("", pokemonId);

  return <PokemonDetail pokemon={pokemon!} />;
};
