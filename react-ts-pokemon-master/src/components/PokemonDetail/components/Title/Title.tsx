import styles from "./styles.module.scss";

interface Props {
  content: string;
  colorSelected: string;
}

export const Title = ({ content, colorSelected }: Props) => {
  return (
    <span className={styles.title} style={{ color: colorSelected }}>
      {content}
    </span>
  );
};
