import React, { useEffect, useState } from 'react';
import { compose, not } from 'ramda';

import { dragging$, inertiaDragging$ } from './dragging.js';
import { DEFAULT_TRANSLATE, TRANSLATE_MODULO, SCALE_FACTOR } from './constants.js';
import Controls from './Controls.js';

const addTranslate = ({ dX, dY }) => ({ x, y }) => ({
  x: (x + dX) % TRANSLATE_MODULO,
  y: (y + dY) % TRANSLATE_MODULO
});

const App = () => {
  const [translate, setTransalte] = useState(DEFAULT_TRANSLATE);
  const [withInertia, setWithInertia ] = useState(true);

  useEffect(() => {    
    const stream$ = withInertia ? inertiaDragging$ : dragging$;
    const subscription = stream$.subscribe(compose(setTransalte, addTranslate));

    return () => {
      subscription.unsubscribe();
    };
  }, [withInertia]);

  const { x, y } = translate;
  const transform = `translate(${x * SCALE_FACTOR}%, ${y * SCALE_FACTOR}%)`;

  const toggleWithInertia = () => { 
    setWithInertia(not); 
  };

  return (
    <div className="dragging-container">
      <div className="dragging-background grabbable" style={{ transform }} />

      <Controls withInertia={withInertia} toggleWithInertia={toggleWithInertia} />
    </div>
  );
}

export default App;
