import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const { y } = useScroll();
	return (
		<div className='App' style={{ height: '1000vh' }}>
			<h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>Hi</h1>
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);
