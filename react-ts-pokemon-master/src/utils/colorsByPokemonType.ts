export type PokemonTypes =
  | "fighting"
  | "normal"
  | "ground"
  | "poison"
  | "flying"
  | "bug"
  | "ghost"
  | "rock"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "ice"
  | "electric"
  | "fairy"
  | "psychic"
  | "dragon"
  | "dark"
  | "shadow"
  | "unknown";

export const background: { [key in PokemonTypes]: string } = {
  fighting: "#C12239",
  normal: "#AAA67F",
  ground: "#DEC16B",
  poison: "#A43E9E",
  flying: "#A891EC",
  bug: "#A7B723",
  ghost: "#70559B",
  rock: "#B69E31",
  steel: "#B7B9D0",
  fire: "#F57D31",
  water: "#6493EB",
  grass: "#74CB48",
  ice: "#9AD6DF",
  electric: "#F9CF30",
  fairy: "#E69EAC",
  psychic: "#FB5584",
  dragon: "#7037FF",
  dark: "#75574C",
  shadow: "#4F507B",
  unknown: "#526677",
};
