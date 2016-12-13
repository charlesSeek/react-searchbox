import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { airlinesFetch,keywordChange,airlinesCount } from '../actions'

class SearchBox extends Component {
	componentWillMount(){
		this.state = {
			keyword:''
		}
	}
	onSearchClick(){
		const keyword = this.state.keyword;
		this.props.keywordChange(keyword);
		this.props.airlinesFetch(keyword,1);
		this.props.airlinesCount(keyword);
	}
	onKeywordChange(event){
		const keyword = event.target.value;
		this.setState({keyword});
	}
	render(){
		return(
			<div className="search-box">
				<input 
					className="search-input"
					type="text"
					placeholder="Enter Keywords"
					value = {this.state.keyworkd}
					onChange = {this.onKeywordChange.bind(this)}
				/>
				<input 
					className="search-button"
					type="button"
					value="Find"
					onClick = {this.onSearchClick.bind(this)}
				/>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {...state}
}
export default connect(mapStateToProps,{airlinesFetch,keywordChange,airlinesCount})(SearchBox);