import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";

import Image from "./Image";
import Button from "./Button";
import Option from "./Option";


const QuizGame = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    return (
        <div className="bg-red-500">
            <p>Desafio {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <Image src={`src/img/monsters/${currentQuestion.image}.png`} />
            <p>Que Monstro é esse?</p>
            {currentQuestion.options.map((option) => (
                <Option option={option} key={option} />
            ))}
            <h2>{currentQuestion.options[currentQuestion.answer - 1]}</h2>
            <Button click={() => dispatch({ type: "CHANGE_QUESTION" })} text="Continuar" />
        </div>
    );
}

export default QuizGame;