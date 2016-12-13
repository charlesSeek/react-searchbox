import React, { Component } from 'react';

class AirlineBox extends Component {
	render(){
		return(
			<div className="airline-box">
				<p className="airline-name">{this.props.airline.name}</p>
				<img 
					className="airline-image"
					src="../../images/airline.jpg"
				/>
			</div>
		)
	}
}
export default AirlineBox;