import React from 'react';
import Switch from '@mui/material/Switch';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';

function DarkModeSwitch({ isDarkMode, onToggle }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <LightModeTwoToneIcon />
      <Switch
        checked={isDarkMode}
        onChange={onToggle}
      />
      <DarkModeTwoToneIcon />
    </div>
  );
}

export default DarkModeSwitch;
