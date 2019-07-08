import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './LocationRow.scss';

class LocationRow extends React.Component {
	render() {
		const {
			street_address,
			city,
			state,
			zip_code,
			phone_number,
		} = this.props.data;

		// TODO: Handle cases where items don't exist

		return (
			<Link
				className="location"
				to={`/${this.props.data.id}`}
			>
				<div>
					<div>Address:</div>
					<div>{street_address}</div>
					<div>{city}, {state} {zip_code}</div>
				</div>
				<div>
					Phone: {phone_number}
				</div>
			</Link>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	company: state.companyReducer.company,
	locations: state.companyReducer.locations,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(LocationRow);
