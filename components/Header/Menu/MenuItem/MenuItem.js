import React, { useEffect, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import Link from 'next/link';

// import './MenuItem.module.scss';

export default function MenuItem({
  contents,
  selector,
  children,
  clickSelector,
  link,
}) {
  // const [itemToAnimate, setItemToAniamte] = useState(null);
  // useEffect(() => {
  //   if (clickSelector) {
  //     setClickedElement(document.querySelector(clickSelector));
  //   }
  // }, []);

  const animate = () => {
    if (!clickSelector) return;
    const itemToAnimate = document.querySelector(clickSelector);
    itemToAnimate.classList.add('emphasized');
    setTimeout(() => {
      itemToAnimate.classList.remove('emphasized');
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
      <style jsx>
        {`
          @import './styles/variables.scss';

          .list-item {
            font-size: 20px;
            height: 100%;
            padding: 40px 20px;
            transition: 0.4s;
            text-align: center;
            cursor: pointer;
            color: #eee;
            font-size: 20px;
            &:hover {
              background: rgba(255, 255, 255, 0.4);
            }
            display: flex;
            align-items: center;
            .scroll-button {
              padding: 20px;
              width: 100%;
            }
          }

          @media (max-width: 1000px) {
            .list-item {
              height: 100%;
              width: 100%;
              font-size: 1em;
            }
          }

          @media (max-width: $phone-breakpoint) {
            .list-item {
              height: 40px;
              .scroll-button {
                padding: 0 20px;
              }
            }
          }
        `}
      </style>
    </li>
  );
}
