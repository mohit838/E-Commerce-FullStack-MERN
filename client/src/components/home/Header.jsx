import React from "react";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header-cover">
        <div className="my-container flex-y h-[300px]">
          <h1 className="header-heading">{children}</h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
