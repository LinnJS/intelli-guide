import React, { Component } from 'react';
import './App.css';
import IndexSelection from '../IndexSelection/IndexSelection';
import ListView from '../ListView/ListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <IndexSelection /> */}
        <ListView />
      </div>
    );
  }
}

export default App;
