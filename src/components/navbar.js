import * as React from "react";
import { Link } from "gatsby";
import { link } from "./navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <div>--------------------------------------------------------</div>
      <Link className={link} to="/">
        Home
      </Link>
      <Link className={link} to="/blog">
        Posts
      </Link>
      <Link className={link} to="/games">
        Games
      </Link>
      <div>--------------------------------------------------------</div>
    </nav>
  );
}
