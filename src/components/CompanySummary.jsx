import React from 'react';
import { connect } from 'react-redux';

import './CompanySummary.scss';

class CompanySummary extends React.Component {
	render() {
		return (
			<div>
				Company Summary
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanySummary);
