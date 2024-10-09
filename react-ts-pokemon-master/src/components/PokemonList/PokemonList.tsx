import { PokemonCard } from "../PokemonCard/PokemonCard.js";
import styles from "./styles.module.scss";

interface Props {
  pokemonURLS?: string[] | null;
  page: number;
  perPage: number;
}

export const PokemonList = ({ page, pokemonURLS, perPage }: Props) => {
  return (
    <div className={styles.allPokemon}>
      {pokemonURLS
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemonURL) => (
          <PokemonCard key={pokemonURL} url={pokemonURL} />
        ))}
    </div>
  );
};
