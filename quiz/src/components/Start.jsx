import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Logo from "../img/logo.webp";
import Button from "./Button";

const Start = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    function startGame() {
        dispatch({ type: "CHANGE_STAGE" })
        dispatch({ type: "REORDER_QUESTIONS" })
    }
    return (
        <div className="app start flex flex-col items-center w-full justify-center h-[100vh] relative gap-8 md:w-[500px] lg:w-[800px]">
            <span className="h-line absolute bottom-0 block"></span>
            <span className="h-line absolute top-0 rotate-180 block"></span>
            <div className="w-[310px] flex justify-center md:w-[340px] xl:w-[400px]">
                <img src={Logo} alt="logo" width="100%" />
            </div>
            <h2 className="info text-md leading-6 font-bold mx-14 text-center md:text-lg">Teste seus conhecimentos no Monster Hunter! Você conhece todos os monstros da franquia? Responda o nome do monstro de acordo com sua imagem</h2>
            <Button click={startGame} text="INICIAR" />
            <p className="info font-bold text-sm text-center px-8 md:text-md">Atenção: Esse app foi feito de fã para fã. Não é um produto oficial da franquia</p>
        </div>
    );
}

export default Start;