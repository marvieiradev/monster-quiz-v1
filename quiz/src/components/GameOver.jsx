import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "./Button";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="app flex flex-col items-center w-[70%] justify-center h-[100vh] relative gap-8">
            <span className="v-line absolute left-0 block"></span>
            <span className="v-line absolute right-0 rotate-180 block"></span>
            <p className="title text-2xl mb-4">Fim de Jogo!</p>
            <div className="w-[80%] flex items-center justify-center mt-[-8%] mb-[-4%] pointer-events-none">
                <img src="src/img/ending.webp" alt="image" />
            </div>
            <p>Pontuação: {quizState.score * 10}</p>
            <p>Respostas Corretas: {quizState.score}</p>
            <Button click={() => /*dispatch({ type: "NEW_GAME" })*/window.location.reload()} text="REINICIAR" />
        </div>
    );
}

export default GameOver;