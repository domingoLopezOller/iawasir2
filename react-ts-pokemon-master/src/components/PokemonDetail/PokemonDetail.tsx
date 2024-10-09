import { IPokemon } from "../../interfaces/interfaces";
import { BaseStats } from "./components/BaseStats/BaseStats";
import { Header } from "./components/Header/Header";
import { PokemonTypes } from "./components/PokemonTypes/PokemonTypes";
import { Stats } from "./components/Stats/Stats";
import { Title } from "./components/Title/Title";
import { background } from "../../utils/colorsByPokemonType"
import styles from "./styles.module.scss";
import { Loader } from "../../common/Loader/Loader";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  /* @ts-ignore */
  const colorSelected = background[pokemon?.types[0]?.type.name];

  if (!pokemon) {
    return (
      <div style={{ background : colorSelected }} className={styles.loading}>
        <Loader size={50} color="fff" />
      </div>
    );
  }

  return (
    <div style={{ background: colorSelected }} className={styles.bg}>
      <Header pokemon={pokemon} />
      <div className={styles.info}>
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        <PokemonTypes pokemon={pokemon} />
        <Title content="About" colorSelected={colorSelected}/>
        <Stats pokemon={pokemon}/>
        <Title content="Base Stats" colorSelected={colorSelected}/>
        <BaseStats pokemon={pokemon} colorSelected={colorSelected}/>
      </div>
    </div>
  );
};
