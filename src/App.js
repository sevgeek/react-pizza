import React from 'react';
import './sass/style.scss'

/** Import components */
import Main from './components/Main/Main'
import Header from './components/Header/Header'

const App = () => (
	<div className="App">
		<Header />
		<Main />
	</div>
)

export default App