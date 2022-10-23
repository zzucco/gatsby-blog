import * as React from "react";
import Layout from "../components/layout";
import Home from "../../content/home.mdx";
import "../styles/fonts.css";
const IndexPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
