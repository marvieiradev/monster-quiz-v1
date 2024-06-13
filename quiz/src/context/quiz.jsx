import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    corrects: 0,
    answerSelected: false,
    maxQuestions: 10,
};

let tempo = 21;
let timer;

function startTimer() {
    tempo = 21;
    timer = setInterval(function () {
        tempo--;
        if (tempo < 0) {
            tempo = 0;
            clearInterval(timer)
        }
    }, 1000);
}

const quizReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_STAGE":
            clearInterval(timer)
            startTimer()
            return {
                ...state,
                gameStage: STAGES[1],

            };

        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            });
            return {
                ...state,
                questions: reorderedQuestions,
            };

        case "CHANGE_QUESTION":
            clearInterval(timer)
            startTimer()
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false
            if (nextQuestion >= initialState.maxQuestions) {
                endGame = true;
                clearInterval(timer);
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false,
            }
        case "NEW_GAME":
            return initialState;

        case "CHECK_ANSWER":
            clearInterval(timer)
            if (state.answerSelected) return state;
            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0
            let score = 0

            if (answer === option) {
                correctAnswer = 1;
                score = 100;
            } else {
                tempo = 0;
            }

            return {
                ...state,
                corrects: state.corrects + correctAnswer,
                score: state.score + score + tempo,
                answerSelected: option,
            }

        default:
            return state;
    }
}

export const QuizContext = createContext();
export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
};