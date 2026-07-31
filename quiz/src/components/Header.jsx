import React from "react";
import Logo from "/logo_quiz.webp";

const Header = () => {
  console.count("Header");

  return <img src={Logo} alt="logo" className="w-[70%] xl:w-[60%]" />;
};

export default React.memo(Header);
