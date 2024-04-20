import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <Link to="/trivia">
        <div className="card game1">
          <h2>TRIVIA</h2>
          <div className="divCardImg">
            <img src="/assets/trivia.png" alt="trivia" />
          </div>
        </div>
      </Link>
      <Link to="/tresEnRaya">
      <div className="card game2">
        <h2>TRES EN RAYA</h2>
        <div className="divCardImg">
          <img src="/assets/tresEnRaya.png" alt="trivia" />
        </div>
      </div>
      </Link>
      <Link to="/wordle">
      <div className="card game3">
        <h2>WORDLE</h2>
        <div className="divCardImg">
          <img src="/assets/wordle.png" alt="trivia" />
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Cards;
