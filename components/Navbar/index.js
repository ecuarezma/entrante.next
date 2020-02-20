import React from "react";
import Link from "next/link";
import NavLink from "../NavLink";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <ul>
        <li
          onClick={() => {
            let links = document.querySelectorAll("li a");

            [...links].map(link => {
              link.classList.remove("active");
            });
          }}
        >
          <Link href="/">
            <a>home</a>
          </Link>
        </li>
        <NavLink id="paintings" />
        <NavLink id="drawings" />
        <NavLink id="studies" />
        <li>
          <Link href="#">
            <a
              style={{
                textDecoration: "line-through",
                color: "rgba(0, 0, 0, 0.5)",
                cursor: "default"
              }}
            >
              store
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a
              style={{
                textDecoration: "line-through",
                color: "rgba(0, 0, 0, 0.5)",
                cursor: "default"
              }}
            >
              blog
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
