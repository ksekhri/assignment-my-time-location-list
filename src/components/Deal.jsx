import React from 'react';
import { connect } from 'react-redux';

import './Deal.scss';
import Variation from './Variation.jsx';

class Deal extends React.Component {
	render() {
		const {
			name,
			variations
		} = this.props;

		// TODO: Handle cases where items don't exist

		return (
			<div className="deal">
				<h3>{name}</h3>
				{variations.map(variation => (<Variation name={variation.name} description={variation.description}/>))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Deal);
