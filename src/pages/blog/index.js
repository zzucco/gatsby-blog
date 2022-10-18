import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div>Blog</div>
      <ul>
        {data.allMdx.nodes.map((n, index) => {
          return (
            <li>
              <Link to={`/blog/${n.frontmatter.slug}`}>
                {n.frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "article" } } }) {
      nodes {
        frontmatter {
          title
          type
          slug
        }
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
