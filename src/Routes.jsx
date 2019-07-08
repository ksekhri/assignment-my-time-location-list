import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from "connected-react-router";
import { history } from './redux/store';
import Home from './pages/Home.jsx'
import Locations from './pages/Locations.jsx'

function Routes() {
	return (
		<ConnectedRouter history={history}>
			<Route exact path="/" component={Home} />
			<Route path="/:companyId" component={Locations} />
		</ConnectedRouter>
	);
}

export default Routes;
