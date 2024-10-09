import styles from "./styles.module.scss";

interface Props {
  size?: number;
  color: string;
}

export const Spinner = ({ size, color }: Props) => {
  return (
    <span
      className={styles.spinner}
      style={{
        width: size,
        height: size,
        borderColor: color,
      }}
    />
  );
};
