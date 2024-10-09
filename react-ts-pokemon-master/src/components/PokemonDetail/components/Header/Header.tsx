import { IPokemon } from "../../../../interfaces/interfaces";
import { IconArrowLeft, IconXlPokeball } from "../../../../assets/pokemonIcons";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  return (
    <header>
      <IconXlPokeball className={styles.pokeball} />
      <div className={styles.left}>
        <IconArrowLeft onClick={() => navigate(-1)} />
        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
};
