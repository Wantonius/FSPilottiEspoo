import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Main from './Main';

class App extends Component {
  
  constructor(props) {
	  super(props);
	  this.state = {
		  list:[],
		  token:"",
		  isLogged:false
	  }
  }
  
  componentDidMount() {
	  if(this.state.isLogged) {
		this.getList();
	  }
  }
  
  
  //Shopping API
  
  getList = (token) => {
	  if(!token) {
		  token = this.state.token
	  }
	  let getObject = {
		  method: "GET",
		  mode: "cors",
		  credentials:"include",
		  headers: {"Content-Type":"application/json",
					 "token":token}
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
  
  login = (user) => {
	  let loginObject = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json"},
		  body:JSON.stringify(user)
		  }
	  fetch("/login",loginObject).then((response) => {
		  if(response.ok) {
			  response.json().then((data)=> {
				  this.setState({
					  token:data.token,
					  isLogged:true
				  })
				  this.getList(data.token);
			  }).catch((error) => {
				  console.log(error)
			  })
		  } else {
			  alert("Wrong credentials");
		  }
	  }).catch((error) => {
		  console.log(error)
	  })
  }

  
  logout = () => {
	  let logoutObject = {
		  method:"POST",
		  mode:"cors",
		  credentials:"include",
		  headers:{"Content-Type":"application/json"}
		  }	
	  fetch("/logout", logoutObject).then((response) => {
		  if(response.ok) {
			  this.setState({
				  token:"",
				  isLogged:false
			  })
		  } else {
			  console.log("Server responded with status:"+response.status)
		  }
	  }).catch((error) => {
		  console.log(error);
	  })
  }
  render() {
    return (
      <div className="App">
		<NavBar isLogged={this.state.isLogged}
				logout={this.logout}/>
		<hr/>
	    <Main addToList={this.addToList}
			  list={this.state.list}
			  removeFromList={this.removeFromList}
			  login={this.login}
			  register={this.register}
			  isLogged={this.state.isLogged}/>
      </div>
    );
  }
}

export default App;
