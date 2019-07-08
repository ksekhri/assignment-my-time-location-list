import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import companyReducer from './reducers/companyReducer';

export default (history) => combineReducers({
	router: connectRouter(history),
	companyReducer,
});
