export let reducer = (store, action) => {
	if (action && action.type === 'Keyword') {
		return (store = {
			...store,
			keyword: action.payload,
		});
	}
	if (action && action.type === 'newsList') {
		return (store = {
			...store,
			newsList: action.payload,
		});
	}
};