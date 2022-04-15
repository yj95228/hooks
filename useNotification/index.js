import React from 'react';

const App = () => {
	const triggerNotif = useNotification('Can I steal you kimchi?', {
		body: "I love kimchi, don't you?",
	});
	return (
		<div className='App'>
			<button onClick={triggerNotif}>Hello</button>
		</div>
	);
};
