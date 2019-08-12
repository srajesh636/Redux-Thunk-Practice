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

/*  Actions are nothing but plain objects: 
	
	ex: {
			type: "USER_DETAILS",
			payload:data
		}
	
	
	Action creators are functions which just returns actions:
	
	ex: getUserDetails = (data) =>{
			return {
				type: "USER_DETAILS",
				payload:data
			}
	}

	Handling Async stuff in redux
	
	ex:
	// This throws error as action creators expect to be plain objects but not promises
	 getUserDetails = aysnc () => {
		 let result = await getDataFromAPI()
		 return {
			 type: 'USER_DETAILS',
			 payload: result
		 }
	 }

	 If we try to use above action creator it return a promise in payload in the action
	 
	 ex:

	 getUserDetails = () => {
		 let data =  getDataFromAPI ();

		 return {
			 type:'USER_DETAILS,
			 payload :data // promise is returned here 
		 }
	 }

	
	 Redux Thunk is used to handle Asynchronous stuff in redux 

	 Redux Action Creators return either objects or functions .

	 ex: getUserDetails = () => {
			return function(){
					return {
						type:'SAMPLE',
						payload:data
					}
			}
		 }
		 
		 thunk function in thunk comes with 2 parameters (dispatch,getState) =>

	ex: getUserDetails = () => {
			return function(){
				return {
					type:'SAMPLE',
					payload: data
				}
			}
		} 

	ex: When Used in Asynchronous stuff : 
		
		getUserDetails = async (dispatch) => {
			let data = await getDataFromAPI();
			dispatch({
				type:'SAMPLE',
				payload:data
			})
		}

*/
