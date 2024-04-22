
import { RandomGame } from "../RandomGame";
import { triviaData } from "./triviaData";

export const INITIAL_STATE = {
  quiz: [],
  nextQuestion: 0,
  score: 0,
  selectedOption: null,
  restart: false,
  randomizer: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_QUIZ":
  const randomizedQuiz = RandomGame(triviaData).slice(0, 20).map(question => ({
    ...question,
    opciones: RandomGame(question.opciones)
  }));
  return { ...state, quiz: randomizedQuiz };
    case "NEXT_QUESTION":
      return { ...state, nextQuestion: state.nextQuestion + 1 };
    case "SCORE":
      return { ...state, score: state.score + 1 };
    case "SELECTED_OPTION":
      return { ...state, selectedOption: action.payload };
      case "RESTART":
        return {
            ...INITIAL_STATE, 
            restart: !state.restart 
          };
    default:
      return state;
  }
};
