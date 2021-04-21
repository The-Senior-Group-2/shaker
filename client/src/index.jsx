import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import GlobalStyles from './GlobalStyles.js';

ReactDOM.render(
  <React.Fragment>
    <GlobalStyles />
    <App />
  </React.Fragment>, document.getElementById('app'));
