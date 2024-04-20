import { RandomGame } from "../RandomGame";
import { wordleData } from "./wordleData";

export const INITIAL_STATE = {
  words: [],
  nextWord: 0,
  randomizer: [0, 1, 2, 3, 4],
  score: 0,
  attempts: 3,
  incorrectMessage: "",
  restart: false,
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_WORDS":
      return { ...state, words: RandomGame(wordleData).slice(0, 10) };
    case "NEXT_WORD":
      return { ...state, nextWord: state.nextWord + 1, attempts: 3 };
      case "RANDOMIZER":
        return { ...state, randomizer: action.payload };
    case "SCORE":
      let newScore = state.score;
      if (state.attempts === 3) {
        newScore += 3;
      } else if (state.attempts === 2) {
        newScore += 2;
      } else if (state.attempts === 1) {
        newScore += 1;
      }
      return { ...state, score: newScore };
    case "ATTEMPTS":
      return { ...state, attempts: state.attempts - 1 };
    case "INCORRECT_MESSAGE":
      return { ...state, incorrectMessage: "Palabra Incorrecta" };
    case "REMOVE_MESSAGE":
      return { ...state, incorrectMessage: ""};
    case "RESTART":
      return {
        ...INITIAL_STATE,
        restart: !state.restart,
      };
    default:
      return state;
  }
};
