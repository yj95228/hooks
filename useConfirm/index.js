import React from 'react';
import ReactDOM from 'react-dom';

export default function App() {
	const deleteWorld = () => console.log('Deleting the world');
	const abort = () => console.log('Aborted');
	const confirmDelete = useConfirm('are you sure', deleteWorld, abort);
	return (
		<div className='App'>
			<button onClick={confirmDelete}>Delete the world</button>
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);