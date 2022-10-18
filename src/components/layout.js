import * as React from "react";
import Header from "../components/header";
import Navbar from "./navbar";
import { container, header, footer } from "./layout.module.css";

export default function Layout({ children }) {
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
