import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Button from "./Button";

const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <>
            <Button text={option} click={() => selectOption(option)} />
        </>
    )
}

export default Option;