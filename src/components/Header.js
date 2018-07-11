import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<header style={{display: 'flex'}}>
				<div>Logo</div>
				<nav>
					<ul>
						<li>
							<Link to="/cohort">Cohort</Link>
						</li>
						<li>
							<Link to="/credits">Credits</Link>
						</li>
						<li>
							<Link to="/person">Person</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header
