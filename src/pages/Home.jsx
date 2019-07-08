import React from 'react';
import logo from '../logo.svg';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Link to="/40426">Go to Location 40426</Link>
			</header>
		</div>
	);
}

export default Home;
