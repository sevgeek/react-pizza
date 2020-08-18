import React from 'react';
import './sass/style.scss'

// Import components
import Main from './components/Main/Main'
import Header from './components/Wrapper/Header/Header'

const App = () => {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	);
}

export default App