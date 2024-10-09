import { PokemonTypes } from "../utils/colorsByPokemonType";

export type PokemonType = {
  name: PokemonTypes | "All";
  url?: string;
};

export type AllPokemonResultType = {
  name: string;
  url: string;
};

export type PokemonByTypeResultType = {
  pokemon: {
    name: string;
    url: string;
  };
};
