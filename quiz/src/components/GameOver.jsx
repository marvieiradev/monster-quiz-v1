import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "./Button";
import { List } from "../functions";

import Finish from "../img/ending.webp";
import Star from "../img/ui/star.webp";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const stars = List(Math.floor(quizState.score / 200));
    return (
        <div className="app flex flex-col items-center w-full max-w-[500px] justify-center h-[100vh] relative gap-6 md:gap-8">
            <span className="v-line absolute left-0 block"></span>
            <span className="v-line absolute right-0 rotate-180 block"></span>
            <h2 className="title text-[35px] mb-4 md:text-[45px]">Fim de Jogo!</h2>
            <div className="w-[80%] flex items-center justify-center mt-[-8%] mb-[-4%] pointer-events-none">
                <img src={Finish} alt="image" />
            </div>
            <div className="flex flex-row items-center pointer-events-none">
                {stars.map((item, index) => (
                    <>
                        <div className="w-[45px] md:w-[65px]">
                            <img key={index.id} src={Star} alt="star" />
                        </div>
                    </>
                ))}
            </div>

            <div className="mb-4 md:mb-10">
                <p className="text-xl font-bold mx-10 text-center">Pontuação: {quizState.score}</p>
                <p className="text-xl font-bold mx-10 text-center">Respostas Corretas: {quizState.corrects}</p>
            </div>
            <Button click={() => /*dispatch({ type: "NEW_GAME" })*/window.location.reload()} text="REINICIAR" />
        </div>
    );
}

export default GameOver;