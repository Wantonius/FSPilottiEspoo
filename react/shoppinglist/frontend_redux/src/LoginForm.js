import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import {register} from './actions/loginActions';
import {connect} from 'react-redux';

class LoginForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			username:"",
			password:""
		}
	}
	
	onChange = (event) => {
		let state = {}
		state[event.target.name] = event.target.value;
		this.setState(state)
	}
	
	submit = (event) => {
		event.preventDefault();
		if(this.state.username.length === 0 || this.state.password.length===0) {
			return
		}
		let user = {
			"username":this.state.username,
			"password":this.state.password
		}
		if(event.target.name === "register") {
			this.props.dispatch(register(user));
		} else {
			this.props.login(user);
		}
	}
	
	render() {
		return (
			<Form>
				<Form.Field>
					<label htmlFor="username">Username</label>
					<input type="text"
						   name="username"
						   onChange={this.onChange}
						   value={this.state.username}/>
				</Form.Field>
				<Form.Field>
					<label htmlFor="password">Password</label>
					<input type="password"
						   name="password"
						   onChange={this.onChange}
						   value={this.state.password}/>
				</Form.Field>
				<Button onClick={this.submit}
						name="register">Register</Button>
				<Button onClick={this.submit}
						name="login">Login</Button>
			</Form>
		)
	}
}

export default connect()(LoginForm);