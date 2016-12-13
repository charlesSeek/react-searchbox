const INITIAL_STATE = 0;

export default (state=INITIAL_STATE,action)=>{
	switch (action.type){
		case 'AIRLINES_COUNT':
			return action.payload;
		default:
			return state;
	}
}