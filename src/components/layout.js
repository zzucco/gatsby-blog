import * as React from "react";
import Header from "../components/header";
import Navbar from "./navbar";
import { container, main, footer } from "./layout.module.css";
import { useMediaQuery } from "react-responsive";

export default function Layout({ children }) {
  const isMobile = useMediaQuery({ query: "(max-width: 450px)" });
  if (isMobile) {
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
      <main className={main}>{children}</main>
      <footer className={footer}></footer>
    </div>
  );
}
