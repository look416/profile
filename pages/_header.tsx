import Link from "next/link";
import styles from "../styles/header.module.css";

const links = [
  {
    name: "Home",
    link: "/",
  },
  // {
  //   name: "About",
  //   link: "/about",
  // },
  // {
  //   name: "Tools",
  //   link: "/tools",
  // },
  {
    name: "Writing",
    link: "https://medium.com/@look416",
  },
];

function NavList(props: any) {
  return (
    <Link href={props.link}>
      <span className={styles.underline}>{props.name}</span>
    </Link>
  );
}

const lists = links.map((link, index) => (
  <NavList key={link.name} name={link.name} link={link.link} />
));

export default function Header() {
  return (
    <header>
      <div className={styles.nav}>
        {lists}
      </div>
    </header>
  );
}
