import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Main from './Main';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
		<NavBar />
		<hr/>
	    <Main isLogged={this.props.isLogged} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
	return {
		isLogged:state.login.isLogged
	}
}
export default withRouter(connect(mapStateToProps)(App));
