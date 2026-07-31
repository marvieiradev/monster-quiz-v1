import React from "react";
const ProgressBar = ({ currentQuestion, maxQuestions }) => {
  console.count("ProgressBar");

  const perc = currentQuestion + 1;

  return (
    <div className="flex flex-col items-center">
      <div className="w-[80%] xl:w-[60%] animpulse">
        <img src={`/bar/br-${Math.ceil(perc)}.svg`} alt="" />
      </div>
      <p className="text-xl lg:text-2xl mb-2">
        Desafio {Number(currentQuestion + 1)} de {Number(maxQuestions)}
      </p>
    </div>
  );
};

export default React.memo(ProgressBar);
