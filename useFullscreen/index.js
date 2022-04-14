import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const onFullS = (isFull) => {
		console.log(isFull ? 'We are full' : 'We are small');
	};
	const { element, triggerFull, exitFull } = useFullscreen(onFullS);
	return (
		<div className='App'>
			<div ref={element}>
				<img
					src='https://i.ibb.co/R6RwNxx/grape.jpg'
					alt='grape'
					width='250'
				></img>
				<button onClick={exitFull}>Exit fullscreen</button>
			</div>
			<button onClick={triggerFull}>Make fullscreen</button>
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);