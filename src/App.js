import React, { useEffect, useState } from 'react';
import { compose } from 'ramda';

import { dragging$, inertiaDragging$ } from './dragging.js';
import { DEFAULT_TRANSLATE, TRANSLATE_MODULO, SCALE_FACTOR } from './constants.js';



const addTranslate = ({ dX, dY }) => ({ x, y }) => ({
  x: (x + dX) % TRANSLATE_MODULO,
  y: (y + dY) % TRANSLATE_MODULO
})

const App = () => {
  const [translate, setTransalte] = useState(DEFAULT_TRANSLATE);

  useEffect(() => {    
    // dragging$.subscribe(compose(setTransalte, addTranslate));
    inertiaDragging$.subscribe(compose(setTransalte, addTranslate));
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
