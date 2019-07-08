import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Location from './pages/Location.jsx'

function Routes() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/:companyId" component={Location} />
		</Router>
	);
}

export default Routes;
