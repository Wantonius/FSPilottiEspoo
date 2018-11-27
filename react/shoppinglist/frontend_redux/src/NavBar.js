import React from 'react';
import {Link} from 'react-router-dom';
import {List} from 'semantic-ui-react';

export default class NavBar extends React.Component {
	
	logout = () => {
		this.props.logout();
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
		return (
		<div>
			{navbar}
		</div>
		)
	}

}