import React from 'react';
import { connect } from 'react-redux';

import './LocationList.scss';

class LocationList extends React.Component {
	render() {
		return (
			<div>
				Location List
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
