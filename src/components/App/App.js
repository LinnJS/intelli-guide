import React, { Component } from 'react';
import './App.css';
import IndexSelection from '../IndexSelection/IndexSelection';
// import ListView from '../ListView/ListView';
import SelectionView from '../SelectionView/SelectionView'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <IndexSelection /> */}
        {/* <ListView /> */}
        <SelectionView />
      </div>
    );
  }
}

export default App;
