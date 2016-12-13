import React,{ Component } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { airlinesFetch } from '../actions';

class Pagination extends Component{
	handlePageClick(data){
		const selected = data.selected;
		const keyword = this.props.keyword;
		console.log('selected:',selected);
		this.props.airlinesFetch(keyword,selected+1);
	}
	render(){
		const pageCount = this.props.pageCount;
		return(
			<div className="pagination-container">
				<ReactPaginate
					previousLabel={"Prev"}
					nextLabel={"Next"}
					pageCount={pageCount}
					pageRangeDisplayed = {9}
					marginPagesDisplayed = {2}
					containerClassName = {"pagination"}
					pageClassName = {"page-style"}
					onPageChange={this.handlePageClick.bind(this)}
					activeClassName={"page-active"}
				/>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {...state}
}
export default connect(mapStateToProps,{airlinesFetch})(Pagination);