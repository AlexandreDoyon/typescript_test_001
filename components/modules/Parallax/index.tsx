import useScrollY from "hooks/useScrollY";
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
  const translateY = useScrollY(speed);

  if (type === "image") {
    return (
      <>
        <div className={cs.cx(["parallax"], "parallax")} />
        <style jsx>{`
          .parallax {
            transform: translate3d(0px, -${translateY}px, 0px);
            background-image: url(${src});
            height: ${height}px;
          }
        `}</style>
      </>
    );
  } else {
    return <div />;
  }
};

export default Parallax;
