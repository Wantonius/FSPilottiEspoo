import React from 'react';
import {Table,Button} from 'semantic-ui-react'; 
import {connect} from 'react-redux';

class MyList extends React.Component {

	remove =(event) => {
		//this.props.removeFromList(event.target.name);
	}

	render() {
		let items = this.props.list.map((item) => {
			return <Table.Row key={item.id}>
						<Table.Cell>{item.firstname}</Table.Cell>
						<Table.Cell>{item.lastname}</Table.Cell>
						<Table.Cell>{item.email}</Table.Cell>
						<Table.Cell>{item.phone}</Table.Cell>
						<Table.Cell><Button onClick={this.remove} 
									name={item.id}>Remove</Button></Table.Cell>
									
					</Table.Row>
		})
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>First Name</Table.HeaderCell>
						<Table.HeaderCell>Last Name</Table.HeaderCell>
						<Table.HeaderCell>Email</Table.HeaderCell>
						<Table.HeaderCell>Phone</Table.HeaderCell>
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
	console.log("MyList - mapStateToProps")
	return {
		list: state.list
	}
}

export default connect(mapStateToProps)(MyList);