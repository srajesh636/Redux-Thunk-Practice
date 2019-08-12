export let getNewsList = keyword => async dispatch => {
	let APIKey = 'ee92f1e3efe94cd79d09e8e8a257c668';

	let result = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=${APIKey}`)
		.then(res => res.json())
		.then(res => {
			return res.articles;
		});

	dispatch({
		type: 'newsList',
		payload: result,
	});
};

export let setActiveKeyword = keyword => {
	return {
		type: 'Keyword',
		payload: keyword,
	};
};


