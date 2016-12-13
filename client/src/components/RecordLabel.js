import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { airlinesCount } from '../actions';

class RecordLabel extends Component{
	componentWillMount(){
		const keyword = this.props.keyword||'';
		this.props.airlinesCount(keyword);
	}
	render(){
		return(
			<p className="record-label">{this.props.count} airlines found</p>
		)
	}
}
function mapStateToProps(state){
	return {...state}
}
export default connect(mapStateToProps,{airlinesCount})(RecordLabel);