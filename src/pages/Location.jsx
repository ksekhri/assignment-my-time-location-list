import React from 'react';
import './Location.css';

function Location(props) {
	return (
		<div className="App">
			<header className="App-header">
				Location {props.match.params.companyId}
			</header>
		</div>
	);
}

export default Location;
