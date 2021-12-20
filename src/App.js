import React, { useState } from 'react';
import './App.css';
import Main from './containers/Main';
import { ThemeProvider } from 'styled-components';
import { themes } from './theme';
import { GlobalStyles } from './global';
//import { CursorProvider } from 'react-cursor-custom';
//import { settings } from './portfolio';
//import ReactGA from 'react-ga';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />

        <div>
          <Main theme={themes[theme]} setTheme={setTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
