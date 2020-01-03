import React from 'react';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Controls = ({ withInertia, toggleWithInertia }) => {
  const inertiaControl = (
    <Tooltip title="Toggle inertia">
      <Switch 
        checked={withInertia}
        onChange={toggleWithInertia}
        value="withInertia"
      />
    </Tooltip>
  );

  const message = (
    <React.Fragment>
      <FormControlLabel
        control={inertiaControl}
        label="Drag seamless texture infinitely using pleasant inertia"
        labelPlacement="start"
      />
      <div>
        Made with React and RxJS
      </div>
    </React.Fragment>
  );

  return (
    <Snackbar
      open
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      message={message}
    />
  );
}

export default Controls;
