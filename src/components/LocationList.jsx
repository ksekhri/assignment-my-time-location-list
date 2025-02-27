import React from 'react';
import { connect } from 'react-redux';

import './LocationList.scss';
import LocationRow from './LocationRow.jsx';

class LocationList extends React.Component {
	render() {
		const { locations } = this.props;
		return (
			<div className="location-list">
				{locations.map(location => (<LocationRow key={location.id} data={location} />))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	company: state.companyReducer.company,
	locations: state.companyReducer.locations,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
