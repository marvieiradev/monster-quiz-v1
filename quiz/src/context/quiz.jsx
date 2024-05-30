import { createContext, useReducer } from "react";
import questions from "../data/questions"

const STAGES = ["Start", "Playng", "End"]

export const QuizContext = createContext()
export const QuizProvider = ({ children }) => {
    const value = { name: "Quiz" };
    return <QuizContext.Provider>{children}</QuizContext.Provider>
};