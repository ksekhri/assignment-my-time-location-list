import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './Home.scss';
import App from "../components/App";
import logo from '../logo.svg';

import companyActions from '../redux/actions/companyAction';

class Home extends React.Component {


	render() {
		const { company } = this.props;
		return (
			<App>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<Link to="/40426">Go to Location 40426</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
