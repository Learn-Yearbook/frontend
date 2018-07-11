import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Cohort from './pages/Cohort'
import Person from './pages/Person'
import Credits from './pages/Credits'
import Home from './pages/Home'
import Header from './components/Header'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<div>
						<Header />
						<Route path="/cohort" component={Cohort} />
						<Route path="/person" component={Person} />
						<Route path="/credits" component={Credits} />
						<Route exact path="/" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
