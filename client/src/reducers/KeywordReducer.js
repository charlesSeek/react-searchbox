const INITIAL_STATE = '';

export default (state=INITIAL_STATE,action)=>{
	switch (action.type){
		case 'KEYWORD_CHANGE':
			return action.payload;
		default:
			return state;
	}
}