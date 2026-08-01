import React from "react";
import Option from "./Option";

const OptionsList = ({ options, onSelectOption, disabled }) => {

  return (
    <div className="options w-[80%] flex flex-col gap-4 text-lg xl:grid xl:grid-cols-2 mt-4">
      {options.map((option) => (
        <Option
          key={option}
          option={option}
          disabled={disabled}
          onClick={onSelectOption}
        />
      ))}
    </div>
  );
};

export default React.memo(OptionsList);
