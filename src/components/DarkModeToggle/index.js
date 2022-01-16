import React from 'react';
import Toggle from '../Toggle';

const DarkModeToggle = (props) => {
    
  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={props.darkMode.disable}>
        ☀
      </button>
      <Toggle checked={props.darkMode.value} onChange={props.darkMode.toggle} />
      <button type="button" onClick={props.darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
