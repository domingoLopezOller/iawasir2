import { IPokemon } from "../../../../interfaces/interfaces";
import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
  colorSelected: string;
}

export const BaseStats = ({ pokemon, colorSelected }: Props) => {
  const maxStat = 255;
  const baseStatNames = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  };
  return (
    <div className={styles.baseStats}>
      {/* @ts-ignore */}
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
        return (
          <div key={name} className={styles.item}>
            <span style={{ color: colorSelected }}>
              {/* @ts-ignore */}
              {baseStatNames[name]}
            </span>
            <div className={styles.rigth}>
              <p>0{base_stat}</p>
              <div className={styles.line}>
                <div
                  className={styles.background}
                  style={{ background: colorSelected }}
                />
                <div
                  className={styles.secondLine}
                  style={{
                    background: colorSelected,
                    opacity: "1",
                    width: `${(base_stat / maxStat) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
