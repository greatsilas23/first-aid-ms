import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Styles from './Styles.js';

ReactDOM.render(
  <App style={Styles.app}/>,
  document.getElementById('root')
);
