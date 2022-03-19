import { Button } from "@chakra-ui/react";
import KofiButton from "kofi-button";
import type { NextPage } from "next";
import styles from "../styles/home.module.css";
import Header from "./_header";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const externals = [
  {
    name: "Github",
    link: "https://github.com/look416",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dannyteo1991/",
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.homeBg}>
          <div className={styles.homeIntro}>
            <h1>Hi, I'm Danny Teo</h1>
            <h3>
              I'm a software developer, loving backend techs, currently based in
              Malaysia.
            </h3>
            <div className={styles.homeExternal}>
              {externals.map((external, index) => (
                <span key={index}>
                  <a className={styles.underline} href={external.link}>
                    {external.name}
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <h1 className={styles.lgit}>Let's Get In Touch</h1>
          <Link href="mailto:dannyteo1@outlook.com">
            <Button rightIcon={<MdEmail />} colorScheme="pink" size="lg">
              Say Hello
            </Button>
          </Link>
          <div className={styles.kofi}>
            <KofiButton color="#0a9396" title="Tip Me" kofiID="dannyteo91" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
