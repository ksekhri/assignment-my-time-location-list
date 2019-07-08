import React from 'react';

import './Header.scss';
import myTimeLogo from '../assets/images/mytime-logo.png';
import {Link} from "react-router-dom";

class Header extends React.Component {
	reset = () => {
		window.location.href = window.location.origin;
	};

	render () {
		return (
			<header className="header">
				<div className="header-content">
					<Link to="/">
						<div className="logo-container">
							<img
								src={myTimeLogo}
								alt="MyTime Logo"
							/>
						</div>
					</Link>
					<div
						onClick={this.reset}
						className="reset-container"
					>
						Reset App
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
