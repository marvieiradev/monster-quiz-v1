import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Logo from "../img/logo.png";
import Button from "./Button";

const Start = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="app start flex flex-col items-center w-full max-w-[500px] justify-center h-[100vh] relative gap-8">
            <span className="h-line absolute bottom-0 block"></span>
            <span className="h-line absolute top-0 rotate-180 block"></span>
            <div className="w-[300px] flex justify-center -rotate-[11deg] md:w-[350px]">
                <img src={Logo} alt="logo" width="90%" />
            </div>
            <h2 className="text-lg leading-6 font-bold mx-14 text-center md:text-xl">Teste seus conhecimentos no Monster Hunter! Você conhece todos os monstros da franquia? Responda o nome do monstro de acordo com sua imagem</h2>
            <Button click={() => dispatch({ type: "CHANGE_STAGE" })} text="INICIAR" />
            <p className="font-bold text-sm text-center px-8 md:text-lg">Atenção: Esse app foi feito de fã para fã. Não é um produto oficial da franquia</p>
        </div>
    );
}

export default Start;