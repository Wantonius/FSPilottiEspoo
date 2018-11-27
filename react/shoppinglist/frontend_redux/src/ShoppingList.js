import React from 'react';
import {Table,Button} from 'semantic-ui-react'; 
import {connect} from 'react-redux';
import {getList,removeFromList} from './actions/shoppingActions';

class ShoppingList extends React.Component {

	componentDidMount() {
		if(this.props.isLogged) {
		  this.props.dispatch(getList());
		}
	}
	
	remove =(event) => {
		this.props.dispatch(removeFromList(event.target.name));
	}

	render() {
		let items = this.props.list.map((item) => {
			return <Table.Row key={item._id}>
						<Table.Cell>{item.type}</Table.Cell>
						<Table.Cell>{item.count}</Table.Cell>
						<Table.Cell>{item.price}</Table.Cell>
						<Table.Cell><Button onClick={this.remove} 
									name={item._id}>Remove</Button></Table.Cell>
									
					</Table.Row>
		})
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Type</Table.HeaderCell>
						<Table.HeaderCell>Count</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Remove</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{items}
				</Table.Body>
			</Table>
		)
	}

}

const mapStateToProps = (state) => {
	console.log(state);
	console.log(state.shopping.list);
	return {
		isLogged:state.login.isLogged,
		list:state.shopping.list
	}
}

export default connect(mapStateToProps)(ShoppingList);