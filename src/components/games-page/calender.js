import * as React from "react";
import gameData from "../../../content/games/list.json";
import Card from "./card";
const GamesCalender = () => {
  const latestData = gameData["2023"];
  return latestData.map((month, index) => {
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
