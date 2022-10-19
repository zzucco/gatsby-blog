import * as React from "react";
import Header from "../components/header";
import Navbar from "./navbar";
import { container, header, footer } from "./layout.module.css";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export default function Layout({ children }) {
  const breakpoints = useBreakpoint();
  if (breakpoints.xs) {
    return (
      <div>
        this is a mobile LAST website. support coming when i feel like it, ya
        hear??
      </div>
    );
  }
  return (
    <div className={container}>
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <main>{children}</main>
      <footer className={footer}></footer>
    </div>
  );
}
