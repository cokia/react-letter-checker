import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

ReactDOM.render(<App />, document.getElementById('root'));

const theme = createMuiTheme({
    typography: {
      fontFamily: 'Do Hyeon',
    },
  });
  
  ReactDOM.render(
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    , document.getElementById('root'));
