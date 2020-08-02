import React from 'react';

import { dpi } from './config';
import { Day } from './Day';

export function Week({ id, days }) {
  const offset = id * 14 * dpi;
  const x = (14 - id) * dpi;

  return (
    <g transform={`translate(${offset}, 0)`}>
      {days.map((density, id) => (
        <Day key={id} num={id} x={x} density={density} />
      ))}
    </g>
  );
}
