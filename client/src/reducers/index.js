import { combineReducers } from 'redux';
import AirlinesReducer from './AirlinesReducer';
import KeywordReducer from './KeywordReducer';
import AirlinesCountReducer from './AirlinesCountReducer';

const rootReducer = combineReducers({
  airlines:AirlinesReducer,
  keyword: KeywordReducer,
  count: AirlinesCountReducer
});

export default rootReducer;
