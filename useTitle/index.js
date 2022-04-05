import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const titleUpdater = useTitle('Loading...');
	return (
		<div className='App'>
      <div>Hi</div>
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);