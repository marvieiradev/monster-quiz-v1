import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];
//const question = state.questions[state.currentQuestion];

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  corrects: 0,
  answerSelected: false,
  maxQuestions: 10,
  modal: {
    open: false,
    success: false,
    image: "",
    bgImage: "",
    title: "",
    subtitle: "",
  },
};

let tempo = 21;
let timer;

function startTimer() {
  tempo = 21;
  timer = setInterval(function () {
    tempo--;
    if (tempo < 0) {
      tempo = 0;
      clearInterval(timer);
    }
  }, 1000);
}

const getModalState = (question, answer, option) => {
  const success = answer === option;

  return {
    open: true,

    success,

    image: success ? `/monsters/big/${question.id}.webp` : "/error.webp",

    bgImage: success ? "/light.webp" : "/empty-big.webp",

    title: success ? "Certa Resposta!" : "Errou!",

    subtitle: success ? answer : "Que pena!",
  };
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      clearInterval(timer);
      startTimer();
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = [...questions].sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      clearInterval(timer);
      startTimer();
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      if (nextQuestion >= initialState.maxQuestions) {
        endGame = true;
        clearInterval(timer);
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
        modal: {
          open: false,
          success: false,
          image: "",
          bgImage: "",
          title: "",
          subtitle: "",
        },
      };
    case "NEW_GAME":
      return initialState;

    case "CHECK_ANSWER":
      clearInterval(timer);
      if (state.answerSelected) return state;
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;
      let score = 0;

      const currentQuestion = state.questions[state.currentQuestion];

      const success = answer === option;

      if (!success) {
        tempo = 0;
      }

      return {
        ...state,
        corrects: state.corrects + Number(success),
        score: state.score + (success ? 100 : 0) + tempo,
        answerSelected: option,
        modal: getModalState(currentQuestion, answer, option),
      };

    default:
      return state;
  }
};

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
