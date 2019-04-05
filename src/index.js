import React from 'react';
import ReactDOM from 'react-dom';
import AppClient from './client/App'

ReactDOM.render(
  <AppClient />,
  document.getElementById('app')
);

module.hot.accept();