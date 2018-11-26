import React from 'react';
import {Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux';

class MyForm extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			firstname:"",
			lastname:"",
			email:"",
			phone:""
		}
	}
	
	submit = (event) => {
		console.log("MyForm - submit");
		event.preventDefault();
		let item = {
			"firstname":this.state.firstname,
			"lastname":this.state.lastname,
			"email":this.state.email,
			"phone":this.state.phone
		}
		let action = {
			"type":"ADD_TO_LIST",
			"item":item
		}
		this.props.dispatch(action);
	}
	
	onChange = (event) => {
		let state = {}
		state[event.target.name] = event.target.value;
		this.setState(state)
	}
	
	
	render() {	
		return(
			<Form onSubmit={this.submit}>
				<Form.Field>
					<label htmlFor="firstname">First Name</label>
					<input type="text"
						   name="firstname"
						   onChange={this.onChange}
						   value={this.state.firstname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="lastname">Last Name</label>
					<input type="text"
						   name="lastname"
						   onChange={this.onChange}
						   value={this.state.lastname}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="email">Email</label>
					<input type="email"
						   name="email"
						   onChange={this.onChange}
						   value={this.state.email}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="phone">Phone</label>
					<input type="text"
						   name="phone"
						   onChange={this.onChange}
						   value={this.state.phone}/>
				</Form.Field>
				<Button type="submit">Add</Button>
			</Form>
			
		)		
	
	}
}

export default connect()(MyForm);