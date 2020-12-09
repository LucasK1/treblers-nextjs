import React from "react";

import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import ScrollHelper from "../ScrollHelper/ScrollHelper";

import "./Header.module.scss";

export default function Header() {
  return (
    <>
      <ScrollHelper height="100px" />
      <header className="page-header sticky">
        <div className="container page-header-internal">
          <Logo />
          <Menu />
        </div>
      </header>
    </>
  );
}
