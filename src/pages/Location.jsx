import React from 'react';
import { connect } from 'react-redux';

import './Location.scss';
import App from "../components/App";

import companyActions from '../redux/actions/companyAction';

class Location extends React.Component {
	setLocations = () => {
		this.props.fetchLocations(40426);
	};

	render() {
		const { locations } = this.props;
		return (
			<App>
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
			</App>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	company: state.companyReducer.company,
	locations: state.companyReducer.locations,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
