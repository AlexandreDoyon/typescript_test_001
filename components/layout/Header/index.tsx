import { useState, MouseEvent, useContext } from "react";
import Link from "next/link";

import MRMP from "components/graphics/logos/Mrmp";
import Hamburger from "components/graphics/icons/Hamburger";
import Login from "components/graphics/icons/Login";

import { ThemeContext } from "context/ThemeContext";
import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

import { Theme } from "interfaces";

type Menu = null | "login" | "nav" | "user";

const Header = () => {
  const { ThemeColor, ThemeMode } = useContext(ThemeContext)! as Theme;

  const cs = new ClassNames(styles);
  const [menu, setMenu] = useState<Menu>(null);
  let lastMenu: Menu = null;

  const handleClick = (event: MouseEvent, action: Menu) => {
    event.preventDefault;
    lastMenu = menu;
    if (action !== menu) return setMenu(action);
    return setMenu(null);
  };

  return (
    <header
      className={cs.cx(
        "header",
        `l-flex-justify u-filter-blur ${ThemeColor} ${ThemeMode}`
      )}
    >
      <button
        className={cs.cx(["button"])}
        onClick={(event) => handleClick(event, "nav")}
      >
        <Hamburger isActive={menu === "nav" ? true : false} />
      </button>

      <Link href="/">
        <a className={cs.cx(["button", "home"], "l-flex-justify")}>
          <MRMP />
          <p className={cs.cx("home-title")}>
            Mon Rétablissement
            <br />
            Mon Parcourt
            <br />
            En Santé Mentale
            <br />
          </p>
        </a>
      </Link>
      <button
        className={cs.cx(["button"])}
        onClick={(event) => handleClick(event, "login")}
      >
        <Login isActive={menu === "login" ? true : false} />
      </button>
    </header>
  );
};

export default Header;
