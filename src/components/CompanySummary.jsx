import React from 'react';
import { connect } from 'react-redux';

import './CompanySummary.scss';

class CompanySummary extends React.Component {
	render() {
		const { name, website } = this.props.company;
		return (
			<div className="company-summary">
				<h2>{ name }</h2>
				<a href={website}>Homepage</a>
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
