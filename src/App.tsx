import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';

//themes
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/globals';

import { Container } from './styles';

function App() {

  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Menu onChange={
          checked => {
            setTheme(checked ? dark : light)
          }
        } />
        <h1>Home</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
