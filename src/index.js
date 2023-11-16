import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/GlobalStyle';

const theme = {
  colors: {
    white: '#fff',
    blues: '#63A2D8',
    greens: '#259D58',
    grays: '#AEBECD',
  },

  radii: {
    sm: '2px',
    md: '4px',
    lg: '16px',
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
function renderApp() {
  root.render(
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider install react-ui theme={theme}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

renderApp();
