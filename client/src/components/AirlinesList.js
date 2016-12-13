import React,{ Component } from 'react';
import AirlineBox from './AirlineBox';
import { connect } from 'react-redux';
import { airlinesFetch,airlinesCount } from '../actions';

class AirlinesList extends Component{
	componentWillMount(){
		const keyword = this.props.keyword;
		this.props.airlinesFetch(keyword,1);
	}
	renderList(){
		return this.props.airlines.map((airline)=>{
			return <AirlineBox key={airline.name} airline={airline}/>
		})
	}
	render(){
		if (this.props.airlines.length < 1){
			return <div>No result</div>
		}
		return(
			<div className="airline-list">
				{this.renderList()}
			</div>
		)
	}
}
function mapStateToProps(state){
	return {...state}
}
export default connect(mapStateToProps,{ airlinesFetch,airlinesCount })(AirlinesList);