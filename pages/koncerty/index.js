import React from 'react';

import ExitDummy from '../../components/ExitDummy/ExitDummy';
import Blackbox from '../../components/Blackbox/Blackbox';

import showList from './showList.json';

// import './Shows.module.scss';

export default function Shows() {
  const displayShowItem = (item, index) => {
    const link = item.linkUrl ? (
      <a href={item.linkUrl} rel="noopener noreferrer" target="_blank">
        {item.linkDesc}
      </a>
    ) : null;

    return (
      <div key={index} className="show-item">
        {item.date !== '' && (
          <h3>
            {item.date}: {item.title}
          </h3>
        )}
        <p className="show-item-description">
          {item.description}
          &nbsp;
          {link}
        </p>
        <hr />
      </div>
    );
  };

  const pastShows = showList
    .filter((item) => !item.future)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(displayShowItem);
  const futureShows = showList
    .filter((item) => item.future)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(displayShowItem);

  return (
    <>
      {/* <Blackbox> */}
        <div className="container">
          <div
            className="page-info-extended"
            onClick={(e) => e.stopPropagation()}>
            <ExitDummy />
            <h2>Nadchodzące koncerty</h2>
            {futureShows.length ? (
              futureShows
            ) : (
              <p style={{ fontWeight: 300 }}>
                <em>Więcej informacji wkrótce!</em>
              </p>
            )}
            <h2 style={{ marginTop: '50px' }}>Kalendarium</h2>
            {pastShows}
          </div>
        </div>
      {/* </Blackbox> */}
      <style jsx>{`
        @import './styles/variables.scss';

        .show-item {
          h3 {
            font-size: 20px;
            padding-top: 10px;
          }

          hr {
            border: 1px solid $text-color;
          }

          @media (max-width: $phone-breakpoint) {
            h3 {
              font-size: 11px;
              padding-top: 4px;
            }

            .show-item-description {
              margin-bottom: 5px;
            }

            hr {
              border-top: transparent;
            }
          }
        }
      `}</style>
    </>
  );
}
