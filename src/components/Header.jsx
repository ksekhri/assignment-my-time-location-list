import React from 'react';

import './Header.scss';
import myTimeLogo from '../assets/images/mytime-logo.png';

class Header extends React.Component {
	reset = () => {
		window.location.href = window.location.origin;
	};

	render () {
		return (
			<header className="header">
				<div className="header-content">
					<div className="logo-container">
						<img
							src={myTimeLogo}
							alt="MyTime Logo"
						/>
					</div>
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
