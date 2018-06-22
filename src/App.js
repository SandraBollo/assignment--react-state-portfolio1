import React, { Component } from 'react';
import logo from './logo.svg';
import ShowHideTech from './components/ShowHideTech.js'
import FilterProjects from './components/FilterProjects.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowHideTech />
        <FilterProjects />

      </div>
    );
  }
}

export default App;
