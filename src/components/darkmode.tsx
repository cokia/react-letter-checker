import React from 'react';
import Switch from '@material-ui/core/Switch';
import useDarkMode from 'use-dark-mode';

export let darkMode = useDarkMode(false);
darkMode = useDarkMode(false);

//if darkmode.value = true 
// render <table variant=dark>
//if darkmode.value = false
// render <table>

const DarkModeToggle = () => {

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>

<Switch checked={darkMode.value} onChange={darkMode.toggle} color="primary"/>

      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};
export default DarkModeToggle;