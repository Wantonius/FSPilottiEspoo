import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import ShoppingList from './ShoppingList';
import ShoppingForm from './ShoppingForm';
import LoginForm from './LoginForm';

export default class Main extends React.Component {

	render() {
		return (
			<Switch>
				<Route exact path="/" render={() => 
					this.props.isLogged ?
					(<Redirect to="/list"/>) :
					(<LoginForm login={this.props.login}
						register={this.props.register}/>)
				}/>
				<Route path="/list" render={() => 
					this.props.isLogged ?
					(<ShoppingList list={this.props.list}
						removeFromList={this.props.removeFromList}/>):
					(<Redirect to="/"/>)
				}/>
				<Route path="/form" render={() => 
					this.props.isLogged ?
					(<ShoppingForm addToList={this.props.addToList}/>):
					(<Redirect to="/"/>)
				}/>
			</Switch>
		)
	
	}

}