import React from 'react';
import './App.css';
// import shareIcon from './share-outline.svg';
import Sharer from './Sharer';

function App() {
	return (
		<div className="App">
			<Sharer text="Share" shareTitle="Hello" />
		</div>
	);
}

export default App;
