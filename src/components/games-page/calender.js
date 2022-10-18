import * as React from "react";
import gameData from "../../../content/games/list.json";
import Card from "./card";
const GamesCalender = () => {
  const data2021 = gameData["2021"];
  console.log(data2021);
  return data2021.map((month, index) => {
    return (
      <div key={month.month}>
        <b>{month.month}</b>
        {month.games.map((game, i) => {
          return <Card key={game.slug} title={game.title} slug={game.slug} />;
        })}
      </div>
    );
  });
};

export default GamesCalender;

export const Head = () => <title>Game Page</title>;
