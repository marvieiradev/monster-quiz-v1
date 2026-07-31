import React from "react";
import Button from "./Button";

const Modal = ({
  modal,
  click,
}) => {
  const {open, image, bgImage, title, subtitle} = modal;
  if (!open) return null;

  return (
    <div
      className={`bg-[#0000008c] flex w-full h-full z-1 m-auto fixed top-0 bottom-0 transition-all
        duration-150 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={click}
    >
      <div className="container bg-yellow-50 flex justify-center m-auto w-[95%] md:w-[450px] xl:w-[600px] rounded-md border-4 relative">
        <span className="h-deco-line absolute top-0 block max-w-full"></span>
        <span className="h-deco-line absolute bottom-0 rotate-180 block max-w-full"></span>
        <div className="flex flex-col items-center mt-10 mb-10">
          <h1 className="title text-xl mb-1 md:text-2xl">{title}</h1>
          <div className="w-[100%] h-[100%] flex items-center justify-center mt-[-8%] mb-[-4%] pointer-events-none relative">
            <img
              src={bgImage}
              alt="bg-image"
              className="image-animation"
            />
            <img
              src={image}
              alt="monster-image"
              className="absolute monster-animation"
            />
          </div>
          <p className="text-xl mb-2 md:text-2xl">{subtitle}</p>
          <Button text="Próximo" className="mb-4" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Modal);
