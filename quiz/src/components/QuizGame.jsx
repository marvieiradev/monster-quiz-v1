import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";
import Modal from "./Modal";
import Logo from "../img/logo_quiz.webp";
import Frame from "../img/ui/frame_monster.webp";

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

    var perc = quizState.currentQuestion + 1;
    return (
        <>
            <div className="app flex flex-col items-center w-full max-w-[500px] justify-center h-[100vh] relative">
                <div className="content-quiz rounded-lg m-10 w-full h-full flex flex-col items-center justify-center gap-4">
                    <span className="v-line absolute left-0 block"></span>
                    <span className="v-line absolute right-0 rotate-180 block"></span>
                    <img src={Logo} alt="logo" className="w-[70%]" />
                    <p className="text-xl lg:text-2xl mb-[-10px]">Desafio {quizState.currentQuestion + 1} de {quizState.maxQuestions}</p>
                    <div className="w-[80%]">
                        <img src={`./bar/br-${Math.ceil(perc)}.svg`} alt="" className="mt-[-5px] pointer-events-none" />
                    </div>
                    <div className="w-[150px] flex items-center justify-center relative p-[5px]  bg-white rounded-xl md:w-[200px]">
                        <img src={`${baseURL}small/${currentQuestion.id}.webp`} alt="monster" />
                        <img src={Frame} className="absolute" />
                    </div>
                    <p className="text-xl lg:text-2xl">Que Monstro é esse?</p>

                    {/*
                    <p className="">{currentQuestion.options[currentQuestion.answer - 1]}</p>
                    */}
                    <div className="options w-[80%] flex flex-col gap-4 text-lg">
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
                        image={currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? `${baseURL}big/${currentQuestion.id}.png` : "./error.webp"}
                        bg_image={currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? "./light.png" : "./empty-big.webp"}
                        mesage={currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? "Certa Resposta!" : "Errou!"}
                        name={currentQuestion.options[currentQuestion.answer - 1] === quizState.answerSelected ? `${currentQuestion.options[currentQuestion.answer - 1]}` : "..."} />
                )
            }
        </>
    );
}

export default QuizGame;