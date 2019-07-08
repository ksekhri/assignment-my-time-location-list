import { ActionTypes } from '../actionTypes/companyActionTypes';

const initialState = {
	company: {},
	locations: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_COMPANY:
			return {
				...state,
				company: action.payload,
			};
		case ActionTypes.SET_LOCATIONS:
			return {
				...state,
				locations: action.payload,
			};
		default:
			return state;
	}
}
