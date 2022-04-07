import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
	const { enablePrevent, disablePrevent } = usePreventLeave();
	return (
		<div className='App'>
			<button onClick={enablePrevent}>Protect</button>
			<button onClick={disablePrevent}>Unprotect</button>
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);