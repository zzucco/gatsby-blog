import * as React from "react";
import Layout from "../../components/layout";
import gameData from "../../../content/games/list.json";
import Card from "../../components/games-page/card";
import { useStaticQuery, graphql } from "gatsby";
import { title, calender, monthGroup, cards } from "./index.module.css";
import { useState } from "react";
const GamesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "card" } }) {
        nodes {
          relativeDirectory
          childImageSharp {
            gatsbyImageData(
              width: 80
              layout: CONSTRAINED
              quality: 10
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
      allMdx(filter: { frontmatter: { type: { eq: "game" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  const [year, setYear] = useState("2022");
  const years = Object.keys(gameData);

  return (
    <Layout>
      <div>Here's a list of all the new single-player games I've played.</div>
      <div>
        {years.map((y, i) => {
          return <button onClick={() => setYear(y)}>{y}</button>;
        })}
      </div>
      <div className={calender}>
        {gameData[year].map((month, index) => {
          return (
            <div className={monthGroup} key={month.month}>
              <b>{month.month}</b>
              <div className={cards}>
                {month.games.map((game, i) => {
                  var image = "";
                  for (var n of data.allFile.nodes) {
                    const dir = n.relativeDirectory;
                    if (dir === "games/" + game.slug) {
                      image = n.childImageSharp.gatsbyImageData;
                    }
                  }
                  const slug = data.allMdx.nodes.find(
                    (n) => n.frontmatter.slug === game.slug
                  );
                  return (
                    <Card
                      key={game.slug}
                      title={game.title}
                      slug={slug ? game.slug : null}
                      image={image}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default GamesPage;

export const Head = () => <title>Game Page</title>;
