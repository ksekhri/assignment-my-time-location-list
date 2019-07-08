import { ActionTypes } from '../actionTypes/companyActionTypes';

// Private Actions
const setCompany = (company) => {
	return {
		type: ActionTypes.SET_COMPANY,
		payload: company,
	};
};

// Public Actions

const fetchCompany = (companyId) => {
	return dispatch => {
		dispatch(setCompany({id: companyId}));
	};
};

export default {
	fetchCompany,
};
