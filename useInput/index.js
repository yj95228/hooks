import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const maxLen = value => value.length <= 10;
  const name  useInput('Mr.', maxLen);
	return (
		<div className='App'>
			<div>Hello</div>
      <input placeholder='Name' {...name} />
		</div>
	);
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);