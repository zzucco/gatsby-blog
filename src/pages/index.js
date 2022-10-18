import * as React from "react";
import Layout from "../components/layout";
const IndexPage = () => {
  return (
    <Layout>
      <p>
        Welcome to my shitty website. This is mostly an excuse to learn React
        and CSS.
      </p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
