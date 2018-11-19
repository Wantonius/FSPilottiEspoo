import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList';
import ShoppingForm from './ShoppingForm';

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
  
  addToList = (item) => {
	  let postObject = {
		  method: "POST",
		  mode: "cors",
		  headers: {"Content-Type":"application/json"},
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
			headers:{"Content-Type":"application/json"}
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
  
	
  render() {
    return (
      <div className="App">
	    <ShoppingForm addToList={this.addToList}/>
		<hr/>
		<ShoppingList list={this.state.list}
					  removeFromList={this.removeFromList}/>
      </div>
    );
  }
}

export default App;
