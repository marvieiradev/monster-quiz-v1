import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Logo from "../img/logo.webp";
import Button from "./Button";

const Start = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="app flex flex-col items-center w-[70%] justify-center h-[100vh] relative gap-8">
            <span className="h-line absolute bottom-0 block"></span>
            <span className="h-line absolute top-0 rotate-180 block"></span>
            <div className="w-[400px] flex justify-center">
                <img src={Logo} alt="logo" width="100%" />
            </div>
            <h2 className="text-2xl leading-8 font-bold mx-14 text-center">Teste seus conhecimentos no Monster Hunter! Você conhece todos os monstros da franquia? Responda o nome do monstro de acordo com o sua imagem</h2>
            <Button click={() => dispatch({ type: "CHANGE_STAGE" })} text="INICIAR" />
            <p className="font-bold">[Atenção: Esse app foi feito de fã para fã. Não é um produto oficial da franquia]</p>
        </div>
    );
}

export default Start;