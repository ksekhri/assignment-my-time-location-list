import React from 'react';
import { connect } from 'react-redux';

import './DealList.scss';
import Deal from './Deal.jsx';

class DealList extends React.Component {
	render() {
		const { deals } = this.props;
		return (
			<div className="deal-list">
				{deals.map(deal => (<Deal key={deal.id} name={deal.service.name} variations={deal.variations} />))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state,
	company: state.companyReducer.company,
	locations: state.companyReducer.locations,
	deals: state.companyReducer.deals,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DealList);
