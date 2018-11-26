import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyList from './MyList';
import MyForm from './MyForm';
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
		<NavBar/>
		<hr/>
		<Switch>
			<Route exact path="/" render={() => 
				<MyList/>
			 }/>
			<Route path="/form" render={() =>
				<MyForm/>
			}/>
		</Switch>
      </div>
    );
  }
}

export default App;
