import React from 'react';

import { dpi } from './config';

const graphStyle = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
};

const styleMonth = {
  fontSize: 10 * dpi,
  fill: '#767676',
};

const styleDay = {
  fontSize: 9 * dpi,
  fill: '#767676',
};

export function Graph({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${722 * dpi} ${112 * dpi}`}
      width={722 * dpi}
      height={112 * dpi}
      style={graphStyle}
    >
      <g transform={`translate(${10 * dpi}, ${20 * dpi})`}>
        {children}

        <text x={27 * dpi} y={-7 * dpi} style={styleMonth}>
          Aug
        </text>
        <text x={79 * dpi} y={-7 * dpi} style={styleMonth}>
          Sep
        </text>
        <text x={144 * dpi} y={-7 * dpi} style={styleMonth}>
          Oct
        </text>
        <text x={196 * dpi} y={-7 * dpi} style={styleMonth}>
          Nov
        </text>
        <text x={248 * dpi} y={-7 * dpi} style={styleMonth}>
          Dec
        </text>
        <text x={313 * dpi} y={-7 * dpi} style={styleMonth}>
          Jan
        </text>
        <text x={365 * dpi} y={-7 * dpi} style={styleMonth}>
          Feb
        </text>
        <text x={417 * dpi} y={-7 * dpi} style={styleMonth}>
          Mar
        </text>
        <text x={482 * dpi} y={-7 * dpi} style={styleMonth}>
          Apr
        </text>
        <text x={534 * dpi} y={-7 * dpi} style={styleMonth}>
          May
        </text>
        <text x={599 * dpi} y={-7 * dpi} style={styleMonth}>
          Jun
        </text>
        <text x={651 * dpi} y={-7 * dpi} style={styleMonth}>
          Jul
        </text>

        <text textAnchor="start" style={styleDay} dx={-10 * dpi} dy={22 * dpi}>
          Mon
        </text>
        <text textAnchor="start" style={styleDay} dx={-10 * dpi} dy={48 * dpi}>
          Wed
        </text>
        <text textAnchor="start" style={styleDay} dx={-10 * dpi} dy={73 * dpi}>
          Fri
        </text>
      </g>
    </svg>
  );
}
