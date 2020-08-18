import React from 'react';
import './sass/style.scss'

// Import components
import Wrapper from './components/Wrapper/Wrapper'
import Header from './components/Wrapper/Header/Header'

const App = () => {
	return (
		<div className="App">
			<Wrapper>
				<Header />
			</Wrapper>
		</div>
	);
}

export default App