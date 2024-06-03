import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "./Button";

const GameOver = () => {
    return (<div>
        <h2>Game Over!</h2>
        <p>Pontuação:0</p>
        <p>Respostas Corretas: 0</p>
        <Button click="" text="REINICIAR" />
    </div>);
}

export default GameOver;