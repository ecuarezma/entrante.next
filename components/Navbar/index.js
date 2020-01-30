import React from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.Navbar}>
        <NavLink id="Home" />
        <NavLink id="Paintings" />
        <NavLink id="Drawings" />
        <NavLink id="Studies" />
        <li>
          <Link href="/">
            <a>Store</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
