import { ActionTypes } from '../actionTypes/companyActionTypes';

const baseUrl = 'https://www.mytime.com/api/mkp/v1/companies/';

// Private Actions
const setCompany = (company) => {
	return {
		type: ActionTypes.SET_COMPANY,
		payload: company,
	};
};

const setLocations = (locations) => {
	return {
		type: ActionTypes.SET_LOCATIONS,
		payload: locations,
	};
};


const setDeals = (deals) => {
	return {
		type: ActionTypes.SET_DEALS,
		payload: deals,
	};
};

// Public Actions

const fetchCompany = (companyId) => {
	return dispatch => {
		fetch(
			`${baseUrl}${companyId}`,
			{
				method: 'GET',
			},
		)
			.then(response => response.json())
			.then(response => {
				// TODO: Add code to handle request failure
				const { company } = response;

				dispatch(setCompany(company));
			});
	};
};

const fetchLocations = (companyId) => {
	return dispatch => {
		fetch(
			`${baseUrl}${companyId}/locations?include_business_hours=true&include_consumer_app_photos=true`,
			{
				method: 'GET',
			},
		)
			.then(response => response.json())
			.then(response => {
				// TODO: Add code to handle request failure
				const { locations } = response;

				dispatch(setLocations(locations));
			});
	};
};


const fetchDeals = (locationId) => {
	const companyId = 40426;
	return dispatch => {
		fetch(
			`${baseUrl}${companyId}/deals?location_ids=${locationId}`,
			{
				method: 'GET',
			},
		)
			.then(response => response.json())
			.then(response => {
				// TODO: Add code to handle request failure
				const { deals } = response;

				dispatch(setDeals(deals));
			});
	};
};

export default {
	fetchCompany,
	fetchLocations,
	fetchDeals,
};
