import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Logo from "/logo.webp";
import Button from "./Button";

const Start = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  function startGame() {
    dispatch({ type: "CHANGE_STAGE" });
    dispatch({ type: "REORDER_QUESTIONS" });
  }
  return (
    <div className="app start flex flex-col items-center w-full justify-center h-[100vh] relative gap-8 sm:w-[500px] xl:w-[800px]">
      <span className="h-line absolute bottom-0 block"></span>
      <span className="h-line absolute top-0 rotate-180 block"></span>
      <div className="w-[310px] flex justify-center md:w-[340px] xl:w-[400px]">
        <img src={Logo} alt="logo" width="100%" />
      </div>
      <h2 className="info text-md leading-6 font-bold mx-8 text-center md:text-lg md:mx-10">
        Você conhece os monstros de Monster Hunter? Observe a imagem,
        identifique o monstro e prove que você conhece a franquia! <br /><br />Quantos você
        consegue acertar?
      </h2>
      <Button click={startGame} text="INICIAR" />
      <p className="info font-bold text-sm text-center px-8 md:text-md md:px-10">
        Aviso: Este é um projeto independente, criado por fãs para fãs. Não é um
        produto oficial e não possui vínculo ou afiliação com a franquia Monster
        Hunter.
      </p>
    </div>
  );
};

export default Start;
