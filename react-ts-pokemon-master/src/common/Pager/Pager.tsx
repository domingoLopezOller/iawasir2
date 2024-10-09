import styles from "./styles.module.scss";

interface Props {
  page: number;
  perPage: number;
  nextPage: () => void;
  prevPage: () => void;
  maxPokemon: number;
}

export const Pager = ({
  page,
  perPage,
  nextPage,
  prevPage,
  maxPokemon,
}: Props) => {
  const lastPage = Math.ceil(maxPokemon / perPage);

  return (
    <div className={styles.pager}>
      <button disabled={page === 1} onClick={prevPage}>
        &lt;
      </button>
      <span>{page}</span>
      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
    </div>
  );
};
