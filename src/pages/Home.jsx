import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './Home.scss';
import App from "../widgets/App";
import CompanySummary from "../components/CompanySummary";
import LocationList from "../components/LocationList";

import companyActions from '../redux/actions/companyAction';

class Home extends React.Component {


	render() {
		const { company } = this.props;
		return (
			<App>
				<CompanySummary />
				<LocationList />
				<Link to="/40426">Go to Location 40426</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
