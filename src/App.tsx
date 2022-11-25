import React from 'react';
import { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';

//themes
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/globals';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Menu />
      <h1>Home</h1>
    </div>
  );
}

export default App;
