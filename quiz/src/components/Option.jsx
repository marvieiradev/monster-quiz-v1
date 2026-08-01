import React, { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Button from "./Button";

const Option = ({ option, onClick, disabled }) => {
  return <Button text={option} click={() => onClick(option)} />;
};

export default React.memo(Option);
