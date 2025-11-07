import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header w-full outline-1">
      <div className="header-container h-20 box-border max-w-[1200px] m-auto grid grid-cols-[1fr_2fr] items-center">
        <div className="header-logo">LOGO</div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
