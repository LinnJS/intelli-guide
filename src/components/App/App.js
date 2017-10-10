import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import IndexSelection from '../IndexSelection/IndexSelection';
import ListView from '../ListView/ListView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <IndexSelection />
          {/* <ListView /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
