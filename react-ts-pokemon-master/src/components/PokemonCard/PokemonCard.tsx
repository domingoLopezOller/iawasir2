import { Link } from "react-router-dom";
import { Spinner } from "../../common/Spinner/Spinner";
import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/colorsByPokemonType";
import styles from "./style.module.scss";

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  /* @ts-ignore */
  const colorSelected = background[pokemon?.types[0]?.type.name];

  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokemonCard}>
      <div style={{ borderColor: colorSelected }} className={styles.top}>
        <span style={{ color: colorSelected }}>#{pokemon?.id}</span>
        {pokemon?.sprites?.other?.dream_world?.front_default ||
        pokemon?.sprites?.front_default ? (
          <img
            src={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt={pokemon?.name}
          />
        ) : (
          <div className={styles.loadingContainer}>
            <Spinner color={colorSelected} />
          </div>
        )}
      </div>
      <div style={{ background: colorSelected }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </Link>
  );
};
