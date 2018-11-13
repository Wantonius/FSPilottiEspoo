import React from 'react';

export default class HelloWorld extends React.Component {
	
	render() {	
		let name = this.props.name;
		if(!name) {
			name = "World"
		}
		return (
			<h1>Hello {name}</h1>		
		)
	}

}