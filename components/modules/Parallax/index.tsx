import { useContext } from "react";

import { AppContext } from "context/AppContext";

import ClassNames from "utils/ClassNames";
import styles from "./styles.module.scss";

interface ParallaxProps {
  speed: number;
  type: "image";
  src: string;
  height: number;
}

const Parallax: React.FC<ParallaxProps> = ({
  speed,
  type,
  src,
  height,
}: ParallaxProps) => {
  const cs = new ClassNames(styles);
  const scrollY = useContext(AppContext)! as number;

  if (type === "image") {
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

export default Parallax;
