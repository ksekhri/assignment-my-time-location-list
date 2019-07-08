import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './Home.css';
import logo from '../logo.svg';

import companyActions from '../redux/actions/companyAction';

class Home extends React.Component {
	setCompany = () => {
		this.props.fetchCompany(22093);
	};

	render() {
		const { company } = this.props;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<button onClick={this.setCompany}>Set Company</button>
					{
						company.id &&
						`Company From Redux Store: ${company.id}`
					}
					<Link to="/40426">Go to Location 40426</Link>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	company: state.companyReducer.company,
});

const mapDispatchToProps = dispatch => ({
	fetchCompany: (companyId) => dispatch(companyActions.fetchCompany(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
