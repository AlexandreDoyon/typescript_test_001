import { useState, MouseEvent } from "react";
import Link from "next/link";

import MRMP from "components/graphics/logos/Mrmp";
import Hamburger from "components/graphics/icons/Hamburger";
import Login from "components/graphics/icons/Login";

import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

type Menu = null | "login" | "nav" | "user";

const Header = () => {
  const cs = new ClassNames(styles);
  const [menu, setMenu] = useState<Menu>(null);

  const handleClick = (event: MouseEvent, action: Menu) => {
    event.preventDefault;
    if (action !== menu) return setMenu(action);
    return setMenu(null);
  };

  return (
    <header
      className={cs.cx(
        "navbar",
        "flex-justify theme-violet theme-dark filter-blur"
      )}
    >
      <button
        className={cs.cx(["btn", "hover", "--bg"])}
        onClick={(event) => handleClick(event, "nav")}
      >
        <Hamburger isActive={menu === "nav" ? true : false} />
      </button>

      <Link href="/">
        <a className={cs.cx(["home", "hover"], "flex-justify")}>
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
        className={cs.cx(["btn", "hover", "--bg"])}
        onClick={(event) => handleClick(event, "login")}
      >
        <Login isActive={menu === "login" ? true : false} />
      </button>
    </header>
  );
};

export default Header;
