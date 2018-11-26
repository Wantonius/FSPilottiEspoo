import React from 'react'
import {List} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
	
	render() {
		return(
			<List>
				<List.Item><Link to="/">List</Link></List.Item>
				<List.Item><Link to="/form">Add</Link></List.Item>
			</List>
		)
	}

}