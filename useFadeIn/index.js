import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const fadeInH1 = useFadeIn(2, 1);
	const fadeInP = useFadeIn(5, 3);
	return (
		<div className='App'>
			<h1 {...fadeInH1}>Hello</h1>
			<p {...fadeInP}>lorem ipsum</p>
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);
