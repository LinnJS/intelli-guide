import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import IndexSelection from '../IndexSelection/IndexSelection';
import ListView from '../ListView/ListView';
import SelectionView from '../SelectionView/SelectionView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={IndexSelection} />
            <Route exact path="/perminant" component={ListView} />
            <Route exact path="/expedition" component={ListView} />
            <Route exact path="/architecture" component={ListView} />
            <Route path="/family" component={ListView} />
            <Route path="/id" component={SelectionView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
