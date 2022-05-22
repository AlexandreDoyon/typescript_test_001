import { useContext } from "react";
import useScrollY from "hooks/useScrollY";

import ClassNames from "utils/ClassNames";
import styles from "./styles.module.scss";

interface BackgroundProps {
  children: React.ReactNode;

  primaryColor: string | null;
  secondaryColor?: string | null;

  opacity?: number;
  padding?: string | null;
  height?: number | null;

  type?: string | null;
  dynamic?: "scrollY" | null;
  speed?: number;

  top?: "wave" | null;
  bottom?: "wave" | null;
}

const Background: React.FC<BackgroundProps> = ({
  children,

  primaryColor,
  secondaryColor,

  opacity,
  padding,
  height,

  type,
  dynamic,
  speed,

  top,
  bottom,
}: BackgroundProps) => {
  const cs = new ClassNames(styles);

  let backgroundOpacity = useScrollY(opacity);

  if (secondaryColor) {
    return (
      <>
        {/* <style jsx>{``}</style> {menu === "login" ? true : false}*/}

        <div
          className={cs.cx([
            "background__secondary",
            `theme-${secondaryColor}`,
          ])}
        >
          <div className={cs.cx(["content"])}>{children}</div>
          <div
            className={cs.cx(["background__primary", `theme-${primaryColor}`])}
            style={{ opacity: backgroundOpacity }}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <style jsx>{``}</style> {menu === "login" ? true : false}*/}

        <div className={cs.cx(["background", `theme-${primaryColor}`])}>
          {children}
        </div>
      </>
    );
  }
};

export default Background;
