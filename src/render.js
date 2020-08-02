import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { SVG } from './SVG';

export function renderSVG() {
  return renderToStaticMarkup(<SVG />);
}
