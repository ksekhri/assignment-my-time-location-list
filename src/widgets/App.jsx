import React from 'react';
import { connect } from 'react-redux';

import './App.scss';
import Header from "./Header";
import Footer from "./Footer";

import companyActions from '../redux/actions/companyAction';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchCompany(40426);
		this.props.fetchLocations(40426);
	}

	render() {
		const { children } = this.props;

		return (
			<div className="app">
				<Header />
				<main className="content">{children}</main>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state,
});

const mapDispatchToProps = dispatch => ({
	fetchCompany: (companyId) => dispatch(companyActions.fetchCompany(companyId)),
	fetchLocations: (companyId) => dispatch(companyActions.fetchLocations(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
