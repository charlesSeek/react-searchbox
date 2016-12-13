import React, { Component } from 'react';
import SearchBox from './SearchBox'
import AirlinesList from './AirlinesList';
import RecordLabel from './RecordLabel';
import Pagination from './Pagination';
import { connect } from 'react-redux';

class MainContent extends Component{
	renderPagination(){
		const count = this.props.count;
		const pageCount = Math.ceil(count/20)
		if (pageCount ==1){
			return null
		}
		return <Pagination pageCount={pageCount}/>
	}
	render(){
		return(
			<div className="main-content">
				<SearchBox/>
				<RecordLabel/>
				<AirlinesList/>
				{this.renderPagination()}
			</div>
		)
	}
}
function mapStateToProps(state){
	return {...state}
}
export default connect(mapStateToProps,null)(MainContent);