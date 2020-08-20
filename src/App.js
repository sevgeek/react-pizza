import React from 'react';
import './sass/style.scss'

/** Import components */
import Showcase from './components/Showcase/Showcase'
import Header from './components/Header/Header'

const App = () => (
	<div className="App">
		<Header />
		<Showcase />
	</div>
)

export default App