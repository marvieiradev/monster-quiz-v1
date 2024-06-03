import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "./Button";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (<div>
        <h2>Game Over!</h2>
        <p>Pontuação: {quizState.score * 10}</p>
        <p>Respostas Corretas: {quizState.score}</p>
        <Button click={() => dispatch({ type: "NEW_GAME" })} text="REINICIAR" />
    </div>);
}

export default GameOver;