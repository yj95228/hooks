import React from 'react';

const App = () => {
	const { loading, data, error, refetch } = useAxios({
		url: 'yts.am/api/v2/list_movies.json',
	});
	console.log(
		`loading: ${loading}\nError:${error}\nData:${JSON.stringify(data)}`
	);
	return (
		<div className='App' style={{ height: '1000vh' }}>
			<h1>{data && data.status}</h1>
			<h2>{loading && 'loading'}</h2>
			<button onClick={refetch}>Refetch</button>
		</div>
	);
};
