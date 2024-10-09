import { useContext } from "react";
import { IconSmPokeball } from "../../assets/pokemonIcons";
import { FilterByType } from "../../common/FilterByType/FilterByType";
import { Pager } from "../../common/Pager/Pager";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";

import styles from "./styles.module.scss";

export const Home = () => {
  const { filteredPokemon } = useContext(PokemonContext);
  const { page, nextPage, prevPage, backToHome } = usePagination();

  let perPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <IconSmPokeball />
          <span>Pokédex</span>
        </div>
      </header>
      <FilterByType />
      <PokemonList
        page={page}
        perPage={perPage}
        pokemonURLS={filteredPokemon}
      />
      <Pager
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        prevPage={prevPage}
        maxPokemon={filteredPokemon?.length!}
      />
    </div>
  );
};
