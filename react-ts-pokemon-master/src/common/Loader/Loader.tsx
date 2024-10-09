import loader from "./loader.module.scss";

interface Props {
  color: string;
  size?: number;
}

export const Loader = ({ size, color }: Props) => {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderColor: color,
      }}
      className={loader.loader}
    />
  );
};
