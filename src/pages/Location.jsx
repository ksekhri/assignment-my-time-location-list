import React from 'react';
import { connect } from 'react-redux';

import './Location.scss';
import App from "../widgets/App";

import companyActions from '../redux/actions/companyAction';
import DealList from "../components/DealList";

class Location extends React.Component {
	componentDidMount() {
		this.props.fetchDeals(this.props.match.params.locationId);
	}

	render() {
		const { locations } = this.props;
		return (
			<App>
				<DealList />
			</App>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	company: state.companyReducer.company,
	locations: state.companyReducer.locations,
	deals: state.companyReducer.deals,
});

const mapDispatchToProps = dispatch => ({
	fetchDeals: (locationId) => dispatch(companyActions.fetchDeals(locationId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
