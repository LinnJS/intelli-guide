import React, { Component } from 'react'
import './App.css'
import IndexHeader from '../IndexHeader/IndexHeader'
import IndexSelection from '../IndexSelection/IndexSelection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexHeader />
        <IndexSelection />
      </div>
    )
  }
}

export default App
