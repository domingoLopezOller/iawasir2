import { HeightIcon, WeightIcon } from "../../../../assets/pokemonIcons";
import { IPokemon } from "../../../../interfaces/interfaces";
import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <span>{pokemon?.weight}</span>
        <WeightIcon />
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <span>{pokemon?.height}</span>
        <HeightIcon />
        <p>Height</p>
      </div>
    </div>
  );
};
