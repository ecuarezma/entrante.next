import React from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.Navbar}>
        <li>
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <NavLink id="paintings" />
        <NavLink id="drawings" />
        <NavLink id="studies" />
        <li>
          <Link href="/">
            <a>store</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
