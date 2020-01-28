import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.Navbar}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/paintings">
            <a>Paintings</a>
          </Link>
        </li>
        <li>
          <Link href="/drawings">
            <a>Drawings</a>
          </Link>
        </li>
        <li>
          <Link href="/studies">
            <a>Studies</a>
          </Link>
        </li>
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
