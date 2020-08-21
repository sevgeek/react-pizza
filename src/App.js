import React from 'react';
import './sass/style.scss'

/** Import components */
import Header from './components/Header/Header'
import Showcase from './components/Showcase/Showcase'

/**
 * @name App
 * @description Корневой компонент приложения
 */
const App = () => (
	<div className="App">
		<Header />
		<Showcase />
	</div>
)

export default App