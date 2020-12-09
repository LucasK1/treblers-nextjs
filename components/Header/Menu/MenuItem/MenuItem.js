import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import Link from "next/link";

import "./MenuItem.module.scss";

export default function MenuItem({
  contents,
  selector,
  children,
  clickSelector,
  link
}) {
  const animate = () => {
    if (!clickSelector) return;
    const itemToAnimate = document.querySelector(clickSelector);
    itemToAnimate.classList.add("emphasized");
    setTimeout(() => {
      itemToAnimate.classList.remove("emphasized");
    }, 300);
  };

  const scroller = selector ? (
    <ScrollIntoView selector={selector} alignToTop className="scroll-button">
      {contents}
    </ScrollIntoView>
  ) : (
    <div className="scroll-button">
      {children}
      {contents}
    </div>
  );
  return (
    <li className="list-item" onClick={animate}>
      {link ? <Link href={`/${link}`}>{scroller}</Link> : scroller}
    </li>
  );
}
