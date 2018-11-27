import React from 'react';
import {Link} from 'react-router-dom';
import {List} from 'semantic-ui-react';
import {logout} from './actions/loginActions';
import {connect} from 'react-redux';

class NavBar extends React.Component {
	
	logout = () => {
		this.props.dispatch(logout());
	}
	
	render() {
		let navbar;
		if(this.props.isLogged) {
			navbar = <List>
						<List.Item><Link name="list"
									to="/list">Shopping List</Link>
									</List.Item>
						<List.Item><Link name="form"
									to="/form">Add Item</Link>
									</List.Item>
						<List.Item><Link name="logout"
									to="/" onClick={this.logout}>Logout</Link></List.Item>
					</List>
		} else {
			navbar = <div style={{height:65}}/>
		}
		if(this.props.error.length > 0) {
			navbar = <div style={{height:65}}>
				<p>Error:{this.props.error}</p>
				</div>
		}
		if(this.props.loading) {
			navbar = <div style={{height:65}}>
				<p> Loading ...</p>
				</div>
		}			
		return (
		<div>
			{navbar}
		</div>
		)
	}

}

const mapStateToProps = (state) => {
	let loading = false;
	let error = ""
	if(state.login.loading || state.shopping.loading) {
		loading = true;
	}
	if(state.shopping.error.length > 0) {
		error = state.shopping.error
	}
	if(state.login.error.length > 0) {
		error = state.login.error
	}
	return {
		isLogged:state.login.isLogged,
		loading:loading,
		error:error
	}	
}

export default connect(mapStateToProps)(NavBar);