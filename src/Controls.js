import React from 'react';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';

const Controls = ({ withInertia, toggleWithInertia }) => (
  <div className="controls">
    <span className="controls-text">
      Drag seamless texture infinitely using pleasant inertia
    </span>

    <Tooltip title="Toggle inertia">
      <Switch 
        checked={withInertia}
        onChange={toggleWithInertia}
        value="withInertia"
        color="primary"
      />
    </Tooltip>
  </div> 
);

export default Controls;
