import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';

class App extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  list:[]
	  }
  }
  
  componentDidMount() {
	  this.getList();
  }
  
  getList = () => {
	  let getObject = {
		  method: "GET",
		  mode: "cors",
		  headers: {"Content-Type":"application/json"}
	  }
	fetch("/api/shopping", getObject).then((response) => {
		if(response.ok) {
			response.json().then((data) => {
					this.setState({
						list:data
					})
			}).catch((error) => {
				console.log(error);
			})
		} else {
			console.log("Response not ok. Status:"+response.status)
		}
	}).catch((error) => {
		console.log(error);
	});
  }  
	
  render() {
    return (
      <div className="App">
		<ShoppingList list={this.state.list}/>
      </div>
    );
  }
}

export default App;
