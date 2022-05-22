import { useContext } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import useScrollY from "hooks/useScrollY";

import { ThemeContext } from "context/ThemeContext";
import Parallax from "components/modules/Parallax";
import Background from "components/modules/Background";

import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

import { SetTheme } from "interfaces";

const Home: NextPage = () => {
  const HeroTurquoiseOpacity = useScrollY(0.0011);
  let { SetThemeColor, SetThemeMode } = useContext(ThemeContext)! as SetTheme;

  SetThemeColor("theme-violet");
  SetThemeMode("theme-dark");

  const cs = new ClassNames(styles);

  // parallax layers speeds
  const Speeds: number[] = [
    0, 0.025, 0.06, 0.06, 0.08, 0.13, 0.18, 0.245, 0.345, 0.5, 0.7,
  ];

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={cs.cx(["dev"], "l-flow-x")}>
        <Link href="/tests">
          <a className={cs.cx(["devLink"], "c-button")}>TEST DEVELOPMENT</a>
        </Link>

        <Link href="/tests">
          <a className={cs.cx(["devLink"], "c-button")}>TEST DEVELOPMENT</a>
        </Link>
      </section>

      <section className={cs.cx(["hero"])}>
        <div className={cs.cx(["hero__background"])}>
          {Speeds.map((speed: number, index: number) => {
            return (
              <Parallax
                key={index}
                speed={speed}
                type="image"
                src={`images/parallax/parallax${index}@1920x1080.png`}
                height={1080}
              />
            );
          })}

          <Parallax
            speed={1}
            type="image"
            src="images/parallax/parallax11@1920x1350.png"
            height={1350}
          />

          <div
            className={cs.cx(["hero__content"])}
            style={{ opacity: HeroTurquoiseOpacity }}
          ></div>
        </div>
      </section>

      <Background
        opacity={0.0011}
        primaryColor="turquoise"
        secondaryColor="black"
      >
        <h1>Test</h1>
      </Background>
    </>
  );
};

export default Home;
