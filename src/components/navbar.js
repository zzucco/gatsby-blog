import * as React from "react";
import { Link } from "gatsby";
import { link, active, sticky, padding } from "./navbar.module.css";
import { useState, useEffect } from "react";
import DarkToggle from "./DarkToggle";
export default function Navbar() {
  function isActive({ isCurrent }) {
    return isCurrent ? { className: active } : null;
  }

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      setSticky(windowHeight > 160);
    }
  };

  return (
    <div>
      <nav className={isSticky ? sticky : ""}>
        <Link className={link} getProps={isActive} to="/">
          home
        </Link>
        <Link className={link} getProps={isActive} to="/blog">
          posts
        </Link>
        <Link className={link} getProps={isActive} to="/games">
          calender
        </Link>
        <DarkToggle />
      </nav>
      <div className={padding}></div>
    </div>
  );
}
