import Link from 'next/link';
import React from 'react';
// import { useHistory } from 'react-router-dom';

import './ExitDummy.module.scss';

export default () => {
  // const history = useHistory();
  return (
    <Link href="/">
      <div className="exit-dummy">
        <div className="exit-dummy-line" />
        <div className="exit-dummy-line opposite" />
      </div>
    </Link>
  );
};
