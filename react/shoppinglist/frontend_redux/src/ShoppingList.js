import React from 'react';
import {Table,Button} from 'semantic-ui-react'; 
import {connect} from 'react-redux';

class ShoppingList extends React.Component {

	componentDidMount() {
		if(this.props.isLogged) {
			//load list
		}
	}
	
	remove =(event) => {
		this.props.removeFromList(event.target.name);
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
	return {
		isLogged:state.isLogged
	}
}

export default connect(mapStateToProps)(ShoppingList);