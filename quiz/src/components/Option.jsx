import React from "react";
import Button from "./Button";

const Option = ({ option, onClick }) => {
  return <Button text={option} click={() => onClick(option)} />;
};

export default React.memo(Option);
