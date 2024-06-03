import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Button from "./Button";

const Option = ({ option }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div className="flex flex-col items-center">
            <Button text={option} />
        </div>);
}

export default Option;