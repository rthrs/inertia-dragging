import React, { useEffect, useState } from 'react';
import { compose } from 'ramda';

import { dragTranslate$ } from './dragging.js';

const DEFAULT_TRANSLATE = { x: 0, y: 0 };
const TRANSLATE_MODULO = 1;
const SCALE_FACTOR = 1/3 * 100;

const addTranslate = ({ dX, dY }) => ({ x, y }) => ({
  x: (x + dX) % TRANSLATE_MODULO,
  y: (y + dY) % TRANSLATE_MODULO
})

const App = () => {
  const [translate, setTransalte] = useState(DEFAULT_TRANSLATE);

  useEffect(() => {    
    dragTranslate$.subscribe(compose(setTransalte, addTranslate));
  }, []);

  const { x, y } = translate;
  const transform = `translate(${x * SCALE_FACTOR}%, ${y * SCALE_FACTOR}%)`;

  return (
    <div className="dragging-container">
      <div className="dragging-background" style={{ transform }} />
    </div>
  );
}

export default App;
