import React from 'react';
import './sass/style.scss'
import {
	Switch,
	Route
} from "react-router-dom";

/** Import components */
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Showcase from './components/Showcase/Showcase'

const App = () => (
	<div className="App">
		<Switch>
			<Route path='/' exact={true}>
				<Header displayNavigation={true} />
				<Showcase />
			</Route>
			<Route path='/cart'>
				<Header displayNavigation={false} />
				<Cart />
			</Route>
		</Switch>
	</div >
)

export default App