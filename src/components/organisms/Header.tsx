import React from "react";
import Search from "../molcules/Search/Search";
import { LinkButton, PrimaryButton } from "../atoms/Button";

const Header = () => {
  return (
    <div className=" fixed shadow-md w-full p-3 flex gap-4 justify-between items-center bg-slate-200">
      <p>Tokyo Guide Logo</p>
      <Search />
      <div className="flex gap-2 justify-between items-center">
        <LinkButton href="/" label="HOME" />
        <LinkButton href="/" label="ABOUT" />
        <LinkButton href="/" label="DOCS" />
      </div>
    </div>
  );
};

export default Header;
