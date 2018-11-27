import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Main from './Main';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class App extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  list:[]
	  }
  }
 

  render() {
    return (
      <div className="App">
		<NavBar />
		<hr/>
	    <Main isLogged={this.props.isLogged} 
			  addToList={this.addToList}
			  list={this.state.list}
			  removeFromList={this.removeFromList}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		isLogged:state.isLogged
	}
}

export default withRouter(connect(mapStateToProps)(App));
