import React from 'react';
import { connect } from 'react-redux';

import './Location.scss';
import Header from "../components/Header";
import Footer from "../components/Footer";

import companyActions from '../redux/actions/companyAction';

class Location extends React.Component {
	setLocations = () => {
		this.props.fetchLocations(40426);
	};

	render() {
		const { locations } = this.props;
		return (
			<div className="App">
				<Header />
				<header className="App-header">
					<button onClick={this.setLocations}>Set Locations</button>
					Locations{
						locations.length
							? `: ${locations.length} Locations Found`
							: ''
					}
				</header>
				<Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Location);
