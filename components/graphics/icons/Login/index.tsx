import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

interface LoginProps {
  isActive: boolean;
}

const cs = new ClassNames(styles);

const Login: React.FC<LoginProps> = ({ isActive }: LoginProps) => {
  return (
    <svg
      className={cs.cx(["login", { "is-active": isActive }])}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={cs.cx(["line", "line--1"], "u-transition")}
        d="M65,65l-23-23c-10-10-17,20-4,18c3-1,9-3,12-4c2-1,6-6,6-6"
      />
      <path
        className={cs.cx(["line", "line--2"], "u-transition")}
        d="M65,35l-23,23c-10,10-17-20-4-18c3,1,9,3,12,4c2,1,6,6,6,6 v0H39"
      />
      <path
        className={cs.cx(["line", "line--3"], "u-transition")}
        d="M44,56v5h16V39H44c0,0,0,4,0,5"
      />
    </svg>
  );
};

export default Login;
