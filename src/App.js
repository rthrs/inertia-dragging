import React from 'react';

const translate = { x: 0, y: 0};

const App = () => {
  const {x, y} = translate;
  const transform = `translate(${x}%, ${y}%)`;
  
  return (
    <div className="dragging-container">
      <div className="dragging-background" style={{ transform }} />
    </div>
  );
}

export default App;
