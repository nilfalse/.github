import React from 'react';

import { dpi } from './config';

const shades = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

export function Day({ x, num, density }) {
  const y = num * 13 * dpi;
  const fill = shades[density];

  return <rect width={10 * dpi} height={10 * dpi} x={x} y={y} fill={fill} />;
}
