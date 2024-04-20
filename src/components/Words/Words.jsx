import { useEffect, useReducer, useRef } from "react";
import { RandomGame } from "../../../utils/RandomGame";
import "./Words.css";
import Score from "../Score/Score";
import GameOver from "../GameOver/GameOver";
import { INITIAL_STATE, Reducer } from "../../../utils/wordle/reducerW";
import { handleRestart, handleSubmit } from "../../../utils/wordle/wordleFunctions";

const Words = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const {
    words,
    nextWord,
    randomizer,
    score,
    attempts,
    incorrectMessage,
    restart,
  } = state;
  const inputValueRef = useRef("");

  useEffect(() => {
    dispatch({ type: "SET_WORDS" });
    const randomOrder = RandomGame(state.randomizer);
    dispatch({ type: "RANDOMIZER", payload: randomOrder });
  }, [restart]);

  return (
    <div className="wordle">
      <p className="textWordle">Adivina la palabra:</p>
      <div className="wordleCard">
        <Score score={score} color={"#ffd166"} />
        {words.length > 0 &&
        randomizer.length > 0 &&
        nextWord < words.length ? (
          <>
            <div className="word">
              <p className="letter">
                {words[nextWord].wordToDes[randomizer[0]]}
              </p>
              <p className="letter">
                {words[nextWord].wordToDes[randomizer[1]]}
              </p>
              <p className="letter">
                {words[nextWord].wordToDes[randomizer[2]]}
              </p>
              <p className="letter">
                {words[nextWord].wordToDes[randomizer[3]]}
              </p>
              <p className="letter">
                {words[nextWord].wordToDes[randomizer[4]]}
              </p>
            </div>
            <input type="text" className="wordInput" ref={inputValueRef} />
          </>
        ) : (
          <GameOver score={score} funct={() => handleRestart(dispatch)} />
        )}
      </div>
      <button className="solveButton" onClick={() => handleSubmit(dispatch, inputValueRef, words, nextWord, attempts )}>
        RESOLVER
      </button>
      <p>INTENTOS: {attempts}</p>
      {incorrectMessage && (
        <p className="incorrectMessage">{incorrectMessage}</p>
      )}
    </div>
  );
};

export default Words;
