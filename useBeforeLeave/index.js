import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

const rootElemnt = document.getElementById('root');
ReactDOM render(<App />, rootElement);