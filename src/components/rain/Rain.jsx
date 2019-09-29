import React, { memo } from 'react';

import './Rain.scss';

const rains = [];

for (let i = 0; i < 150; i++) {
  rains.push(<i key={i} className="rain" />);
}

const Rain = () => <div className="rain-wrapper">{rains}</div>;

export default memo(Rain);
