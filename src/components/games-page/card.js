import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { card, parent, icon, cardImage, noArticle } from "./card.module.css";
//import FileText from "../FileTextIcon";

const FileText = ({ size = 24, color = "#FFFFFF" }) => (
  <svg
    className={icon}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
  </svg>
);

const Card = ({ title, slug, image }) => {
  return (
    <div className={card}>
      {slug ? (
        <Link to={`/games/${slug}`}>
          <GatsbyImage alt={title} image={getImage(image)} />
          <FileText className={icon} />
        </Link>
      ) : (
        <GatsbyImage
          className={cardImage}
          alt={title}
          image={getImage(image)}
        />
      )}
    </div>
  );
};

export default Card;

export const Head = () => <title>Game Page</title>;
