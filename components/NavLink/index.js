import React from "react";
import Link from "next/link";

const NavLink = ({ id }) => {
  const handleToggle = id => {
    let links = document.querySelectorAll("li a");

    [...links].map(link => {
      link.classList.remove("active");
      if (link.innerHTML === id) {
        link.classList.add("active");
      }
    });
  };

  return (
    <li onClick={() => handleToggle(id)}>
      <Link href="/[id]" as={`/${id}`}>
        <a>{id}</a>
      </Link>
    </li>
  );
};

export default NavLink;
