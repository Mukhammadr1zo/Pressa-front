import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './context/token'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <App />
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
