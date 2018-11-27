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
 
  
  
  //Shopping API
  

  
  addToList = (item) => {
	  let postObject = {
		  method: "POST",
		  mode: "cors",
		  credentials:"include",
		  headers: {"Content-Type":"application/json",
					"token":this.state.token
		  },
		  body:JSON.stringify(item)
	  }
	fetch("/api/shopping", postObject).then((response) => {
		if(response.ok) {
			this.getList();
		} else {
			console.log("Response not ok. Status:"+response.status)
		}
	}).catch((error) => {
		console.log(error);
	});	  
  }
  
  removeFromList = (id) => {
	  let deleteObject= {
			method:"DELETE",
			mode:"cors",
			credentials:"include",
			headers:{"Content-Type":"application/json",
			"token":this.state.token}
	  }
	  fetch("/api/shopping/"+id,deleteObject).then((response) => {
		if(response.ok) {
			this.getList();
		} else {
			console.log("Response not ok. Status:"+response.status)
		}
	}).catch((error) => {
		console.log(error);
	});	  
  }
  
  //LOGIN API
  


  


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
