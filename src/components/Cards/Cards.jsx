import { Link } from "react-router-dom";
import "./Cards.css";
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="cards">
      <Card to={"/trivia"} classes={"card game1"} src={"/assets/trivia.png"}>
        TRIVIA
      </Card>
      <Card to={"/wordle"} classes={"card game2"} src={"/assets/wordle.png"}>
        WORDLE
      </Card>
    </div>
  );
};

export default Cards;
