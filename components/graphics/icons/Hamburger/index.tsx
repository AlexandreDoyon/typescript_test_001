import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

interface HamburgerProps {
  isActive: boolean;
}

const cs = new ClassNames(styles);

const Hamburger: React.FC<HamburgerProps> = ({ isActive }: HamburgerProps) => {
  return (
    <svg
      className={cs.cx(["hamburger", { "is-active": isActive }])}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cs.cx(["line", "line--1"], "transition")}
        d="M0 40h62c13 0 6 28-4 18L35 35"
      />
      <path className={cs.cx(["line", "line--2"], "transition")} d="M0 50h70" />
      <path
        className={cs.cx(["line", "line--3"], "transition")}
        d="M0 60h62c13 0 6-28-4-18L35 65"
      />
    </svg>
  );
};

export default Hamburger;
