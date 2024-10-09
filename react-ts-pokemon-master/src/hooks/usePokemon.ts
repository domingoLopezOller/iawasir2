import axios from "axios";
import { useEffect, useState } from "react";
import { IPokemon } from "../interfaces/interfaces";

export const usePokemon = (url?: string, id?: string) => {
  const [pokemon, setPokemon] = useState<null | undefined | IPokemon>();

  const axiosGetPokemon = async () => {
    if (url) {
      const { data } = await axios.get(url);
      setPokemon(data);
    } else if (id) {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(data);
    }
  };

  useEffect(() => {
    axiosGetPokemon();
  }, []);

  return { pokemon };
};
