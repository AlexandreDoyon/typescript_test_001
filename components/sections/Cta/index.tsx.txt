import { useContext } from "react";

import { AppContext } from "context/ScrollYContext";

import ClassNames from "utils/ClassNames";
import styles from "./styles.module.scss";

interface CtaProps {
  speed: number;
  type: "dynamicBackground" | null;
  src: string;
  height: number;
}

const Cta: React.FC<CtaProps> = ({ speed, type, src, height }: CtaProps) => {
  const cs = new ClassNames(styles);
  const scrollY = useContext(AppContext)! as number;

  if (type === "dynamicBackground") {
    return (
      <div
        className={cs.cx(["parallax_container"])}
        style={{
          transform: "translate3d(0px, -" + scrollY * speed + "px, 0px)",
          backgroundImage: "url(" + src + ")",
          height: height + "px",
        }}
      />
    );
  } else {
    return <div />;
  }
};

export default Cta;
