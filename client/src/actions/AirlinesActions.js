import axios from 'axios';

export const airlinesFetch = (keyword,page) =>{
	return (dispatch)=>{
		const url = "http://localhost:12000/airlines?"+"page="+page+"&keyword="+keyword;
		axios.get(url)
		.then((response)=>{
			const data = response.data.data;
			dispatch({type:'AIRLINES_FETCH_SUCCESS',payload:data})
		});
		dispatch({type:'KEYWORD_FETCH',payload:keyword})
	}
}
export const keywordChange = (keyword)=>{
	return (dispatch)=>{
		dispatch({type:'KEYWORD_CHANGE',payload:keyword})
	}
}

export const airlinesCount = (keyword)=>{
	return (dispatch)=>{
		const url = "http://localhost:12000/stat?"+"keyword="+keyword;
		console.log(url)
		axios.get(url)
		.then(response=>{
			const count = response.data.data;
			console.log('count:',count)
			dispatch({type:'AIRLINES_COUNT',payload:count})
		})
	}
}