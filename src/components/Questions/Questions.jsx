import { useEffect, useReducer } from "react";
import "./Questions.css";
import { INITIAL_STATE, Reducer } from "../../../utils/trivia/reducer";
import Score from "../Score/Score";
import GameOver from "../GameOver/GameOver";
import { handleRestart, selectOption } from "../../../utils/trivia/triviaFunctions";

const Questions = () => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const { quiz, nextQuestion, score, selectedOption, restart } = state;

  useEffect(() => {
    dispatch({ type: "SET_QUIZ" });
  }, [dispatch, restart]);


  return (
    <div className="trivia">
      <Score score={score} color={"#7dcae4"}/>
      <div className="questionCard">
        {quiz.length > 0 && nextQuestion < quiz.length ? (
          <>
            <div className="question">{quiz[nextQuestion].pregunta}</div>
            <ul className="options">
              {quiz[nextQuestion].opciones.map((opcion, index) => (
                <li
                  className={`option ${
                    opcion === selectedOption &&
                    opcion === quiz[nextQuestion].respuestaCorrecta
                      ? "correct"
                      : opcion === selectedOption
                      ? "false"
                      : ""
                  }`}
                  key={index}
                  onClick={() => selectOption(dispatch, opcion, nextQuestion, quiz)}
                >
                  {opcion}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <GameOver score={score} funct={() => handleRestart(dispatch)}/>
        )}
      </div>
    </div>
  );
};

export default Questions;
