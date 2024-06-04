import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";

import Image from "./Image";
import Button from "./Button";
import Option from "./Option";
import Modal from "./Modal";

const QuizGame = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    let imgs = "";
    let mesage = "";

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.options[currentQuestion.answer - 1], option },
        });
    }
    return (
        <div className="flex flex-col items-center w-full justify-center">
            <p>Desafio {quizState.currentQuestion + 1} de {quizState.maxQuestions}</p>
            <img src={`src/img/monsters/${currentQuestion.image}.png`} alt="a" width="50%" />
            <p>Que Monstro é esse?</p>
            {currentQuestion.options.map((option) => (
                <Option option={option}
                    key={option}
                    answer={currentQuestion.answer}
                    selectOption={() => onSelectOption(option)}
                />
            ))}

            {quizState.answerSelected && (
                <>
                    {currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? imgs = `monsters/${currentQuestion.image}` : imgs = "mh"}
                    {currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? mesage = "acertou!" : mesage = "errou!"}
                    <Modal click={() => dispatch({ type: "CHANGE_QUESTION" })} image={`src/img/${imgs}.png`} mesage={mesage} />
                </>
            )}
        </div>
    );
}

export default QuizGame;