import React from "react";
import Link from "next/link";

const NavLink = props => {
  return (
    <li>
      <Link href="/[id]" as={`/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );
};

export default NavLink;
