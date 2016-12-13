import React, { Component } from 'react';

class Header extends Component{
	render(){
		return(
			<div className="header">
				<img 
					className="logo-image"
					src="../../images/logo.png"
				/>
			</div>
		)
	}
}
export default Header;