import React from 'react';
import { connect } from 'react-redux';

import './Locations.css';

import companyActions from '../redux/actions/companyAction';

class Locations extends React.Component {
	setLocations = () => {
		this.props.fetchLocations(40426);
	};

	render() {
		const { locations } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<button onClick={this.setLocations}>Set Locations</button>
					Locations{
						locations.length
							? `: ${locations.length} Locations Found`
							: ''
					}
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	company: state.companyReducer.company,
	locations: state.companyReducer.locations,
});

const mapDispatchToProps = dispatch => ({
	fetchLocations: (companyId) => dispatch(companyActions.fetchLocations(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
