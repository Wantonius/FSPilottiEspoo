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
		if(this.props.loginError.length > 0) {
			navbar = <div style={{height:65}}>
				<p>Error:{this.props.loginError}</p>
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
	return {
		isLogged:state.isLogged,
		loading:state.loading,
		loginError:state.error
	}	
}

export default connect(mapStateToProps)(NavBar);