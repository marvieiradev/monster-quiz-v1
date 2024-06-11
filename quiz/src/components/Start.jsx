import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Logo from "../img/logo.png";
import Button from "./Button";
import Image from "./Image";

const Start = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="app flex flex-col items-center w-[70%] justify-center h-[100vh] relative gap-8">
            <span className="h-line absolute bottom-4 block"></span>
            <span className="h-line absolute top-4 rotate-180 block"></span>

            <h2 className="text-2xl font-bold">Monster Quiz</h2>
            <p>Clique no botão para iniciar</p>
            <div className="w-[400px] flex justify-center">
                <img src={Logo} alt="logo" width="90%" />
            </div>
            <Button click={() => dispatch({ type: "CHANGE_STAGE" })} text="INICIAR" />
        </div>
    );
}

export default Start;