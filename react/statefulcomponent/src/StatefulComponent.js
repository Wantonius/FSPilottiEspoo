import React from 'react';

export default class StatefulComponent extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			color:"red"
		}
	}
	
	onChange = (event) => {
		this.setState({
			color:event.target.value
		})
	}
	
	render() {
	    let style = {backgroundColor:this.state.color}
		return (
		<div>
			<h1 style={style}>Hello World</h1>
			<label htmlFor="color">Enter color</label>
			<input name="color"
				   type="text"
				   value={this.state.color}
				   onChange={this.onChange}/>
		</div>
		)
	}
	
}