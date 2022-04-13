import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const handleNetworkChange = (online) => {
		console.log(online ? 'We just went online' : 'We are offline');
	};
	const onLine = useNetwork(handleNetworkChange);
	return (
		<div className='App'>
			<h1>{onLine ? 'OnLine' : 'Offline'}</h1>
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);