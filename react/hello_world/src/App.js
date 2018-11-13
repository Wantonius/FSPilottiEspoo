import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
			<HelloWorld name="Erno"/>
			<HelloWorld name="Jaska"/>
			<HelloWorld name="Matti"/>
			<HelloWorld />
      </div>
    );
  }
}

export default App;
