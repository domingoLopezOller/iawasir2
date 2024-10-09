import { IPokemon } from "../../../../interfaces/interfaces";
import { background } from "../../../../utils/colorsByPokemonType";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonTypes = ({ pokemon }: Props) => {
  return (
    <div className={styles.types}>
      {/* @ts-ignore */}
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          /* @ts-ignore */
          style={{ background: background[name] }}
          className={styles.type}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
