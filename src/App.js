import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './Person';

class App extends Component{
  render(){
    return(
    <div className="App">
      <Person />
    </div>
    );
  }
}
export default App;
