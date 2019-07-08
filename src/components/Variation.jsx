import React from 'react';
import { connect } from 'react-redux';

import './LocationRow.scss';

class Variation extends React.Component {
	render() {
		const {
			name,
			description
		} = this.props;

		// TODO: Handle cases where items don't exist

		return (
			<div>
				<h5>{name}</h5>
				{description}
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

export default connect(mapStateToProps, mapDispatchToProps)(Variation);
