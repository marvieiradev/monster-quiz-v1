import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Logo from "../img/logo.png";
import Button from "./Button";
import Image from "./Image";

const Start = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="flex flex-col items-center justify-center max-w-[500px] first:w-[400px] gap-4">
            <h2 className="text-2xl font-bold">Monster Quiz</h2>
            <p>Clique no botão para iniciar</p>
            <Image src={Logo} />
            <Button onClick={() => dispatch({ type: "CHANGE_STAGE" })} text="INICIAR" />
        </div>
    );
}

export default Start;