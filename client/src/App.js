import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes {...props} />
      </BrowserRouter>
    );
  }
}

export default App;
