import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "./Button";


const Option = ({
    option,
    onClick,
    disabled
}) => {

    console.count(option);

    return (

        <Button text={option} click={() => onClick(option)} />

    );

}

export default React.memo(Option);
/*
const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <Button text={option} click={() => selectOption(option)} />
    )
}

export default React.memo(Option);*/