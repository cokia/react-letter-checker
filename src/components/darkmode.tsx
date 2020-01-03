import React from 'react';
import Switch from '@material-ui/core/Switch';
import useDarkMode from 'use-dark-mode';
import {Table} from 'react-bootstrap';

const DarkModeToggle = () => {
const darkMode = useDarkMode(false);

  return (
    <div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>

<Switch checked={darkMode.value} onChange={darkMode.toggle} color="primary"/>

      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
      <Table responsive variant={darkMode.value ? 'dark' : 'light'} >
  <thead>
    <tr>
      <th>글자수 (띄어쓰기 미포함)</th>
      <th>글자수 (띄어쓰기 포함)</th>
      <th>바이트수 (한글 3바이트,영어 1바이트)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    </tbody>
</Table>
    </div>
    
  );
};
export default DarkModeToggle;
