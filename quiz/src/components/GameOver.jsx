import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "./Button";
import { List } from "../functions";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const stars = List(Math.floor(quizState.score / 200));
    return (
        <div className="app flex flex-col items-center w-[70%] justify-center h-[100vh] relative gap-6">
            <span className="v-line absolute left-0 block"></span>
            <span className="v-line absolute right-0 rotate-180 block"></span>
            <h2 className="title text-[40px] mb-4">Fim de Jogo!</h2>
            <div className="w-[80%] flex items-center justify-center mt-[-8%] mb-[-4%] pointer-events-none">
                <img src="src/img/ending.webp" alt="image" />
            </div>
            <div className="flex flex-row items-center">
                {stars.map((item, index) => (
                    <img key={index} src="src/img/ui/star.webp" alt="star" width="75px" />
                ))}
            </div>
            <p className="text-2xl font-bold mx-10 text-center">Pontuação: {quizState.score}</p>
            <p className="text-2xl font-bold mx-10 text-center">Respostas Corretas: {quizState.corrects}</p>

            <Button click={() => /*dispatch({ type: "NEW_GAME" })*/window.location.reload()} text="REINICIAR" />
        </div>
    );
}

export default GameOver;