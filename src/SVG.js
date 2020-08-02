import React, { useState, useEffect } from 'react';

import * as animations from './animations';
import { Graph } from './Graph';
import { Week } from './Week';

export function SVG() {
  const [weeks, setWeeks] = useState(animations.random());

  useEffect(function () {
    function iterate() {
      setWeeks(animations.random());

      timeoutId = setTimeout(iterate, 100);
    }

    let timeoutId = setTimeout(iterate, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Graph>
      {weeks.map((daysDensity, weekId) => (
        <Week key={weekId} id={weekId} days={daysDensity} />
      ))}
    </Graph>
  );
}
