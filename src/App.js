import React from 'react';
import './sass/style.scss'

/** Import React Router */
import {
	Switch,
	Route
} from "react-router-dom";

/** Import components */
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Showcase from './components/Showcase/Showcase'

/**
 * @name App
 * @description Корневой компонент приложения
 */
const App = () => (
	<div className="App">
		<Header />
		<Switch>
			<Route path='/' exact={true}>
				<Showcase />
			</Route>
			<Route path='/cart'>
				<Cart />
			</Route>
		</Switch>
	</div>
)

export default App