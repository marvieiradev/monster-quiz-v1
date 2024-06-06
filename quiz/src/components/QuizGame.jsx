import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";
import Modal from "./Modal";

const QuizGame = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const baseURL = "https://raw.githubusercontent.com/marvieiradev/imgs-projetos/master/quiz-mh/"

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.options[currentQuestion.answer - 1], option },
        });
    }
    return (
        <>
            <div className="flex flex-col items-center w-[70%] justify-center h-[100vh]">
                <div className=" content-quiz rounded-lg m-10 w-full h-full flex flex-col items-center justify-center">
                    <p>Desafio {quizState.currentQuestion + 1} de {quizState.maxQuestions}</p>
                    <div className="img-quiz w-[200px] flex items-center justify-center">
                        <img src={`${baseURL}small/${currentQuestion.id}.webp`} alt="monster" height="95%" width="95%" />
                    </div>
                    <p>Que Monstro é esse?</p>
                    <div className="options w-[65%] flex flex-col gap-4 text-lg">
                        {currentQuestion.options.map((option) => (
                            <Option option={option}
                                key={option}
                                answer={currentQuestion.answer}
                                selectOption={() => onSelectOption(option)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {
                quizState.answerSelected && (
                    <Modal click={
                        () => dispatch({ type: "CHANGE_QUESTION" })}
                        image={currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? `${baseURL}big/${currentQuestion.id}.webp` : "src/img/mh.webp"}
                        mesage={currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? "acertou!" : "errou!"}
                        name={currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? `${currentQuestion.options[currentQuestion.answer - 1]}` : ""} />
                )
            }
        </>
    );
}

export default QuizGame;