import { useContext } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { AppContext } from "context/AppContext";
import Parallax from "components/modules/Parallax";

import styles from "./styles.module.scss";
import ClassNames from "utils/ClassNames";

const Home: NextPage = () => {
  const scrollY = useContext(AppContext)! as number;
  const cs = new ClassNames(styles);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={cs.cx(["hero"])}>
        <Link href="/tests">
          <a className={cs.cx(["devLink"], "button")}>TEST DEVELOPMENT</a>
        </Link>

        <div className={cs.cx(["hero__parallax"])}>
          <Parallax
            speed={0}
            type="image"
            src="images/background/hero-parallax-landscape/bg-parallax-landscape-layer-1.png"
            height={1080}
          />

          <Parallax
            speed={0.025}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-2.png"
            height={1080}
          />

          <Parallax
            speed={0.06}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-3.png"
            height={1080}
          />

          <Parallax
            speed={0.06}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-4.png"
            height={1080}
          />

          <Parallax
            speed={0.08}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-5.png"
            height={1080}
          />

          <Parallax
            speed={0.13}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-6.png"
            height={1080}
          />

          <Parallax
            speed={0.18}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-7.png"
            height={1080}
          />

          <Parallax
            speed={0.245}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-8.png"
            height={1080}
          />

          <Parallax
            speed={0.345}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-9.png"
            height={1080}
          />

          <Parallax
            speed={0.5}
            type="image"
            src="/images/background/hero-parallax-landscape/bg-parallax-landscape-layer-10.png"
            height={1080}
          />

          <Parallax
            speed={0.7}
            type="image"
            src="images/background/hero-parallax-landscape/bg-parallax-landscape-layer-11.png"
            height={1080}
          />

          <Parallax
            speed={1}
            type="image"
            src="images/background/hero-parallax-landscape/bg-parallax-landscape-layer-12.png"
            height={1350}
          />
        </div>

        <div
          className={cs.cx(["hero__cover"])}
          style={{ opacity: scrollY * 0.0011 }}
        ></div>
      </section>
      <section className={cs.cx(["cta"])}>
        <div className={cs.cx(["cta__bg"])}></div>
        <div
          className={cs.cx(["cta__content"])}
          style={{ opacity: scrollY * 0.0011 }}
        ></div>
      </section>
    </>
  );
};

export default Home;
