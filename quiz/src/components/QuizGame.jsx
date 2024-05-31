import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";


const QuizGame = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="bg-red-500">
            <p>Desafio {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <Image src="" />
            <p>Que Monstro é esse?</p>
            <div>
                <Button text="Continuar" />
            </div>
        </div>
    );
}

export default QuizGame;