export const GET_SHOPPINGLIST_SUCCESS = "GET_SHOPPINGLIST_SUCCESS";
export const GET_SHOPPINGLIST_FAILED = "GET_SHOPPINGLIST_FAILED";
export const ADD_TO_SHOPPINGLIST_SUCCESS = "ADD_TO_SHOPPINGLIST_SUCCESS";
export const ADD_TO_SHOPPINGLIST_FAILED = "ADD_TO_SHOPPINGLIST_FAILED";
export const DELETE_FROM_SHOPPINGLIST_SUCCESS = "DELETE_FROM_SHOPPINGLIST_SUCCESS"
export const DELETE_FROM_SHOPPINGLIST_FAILED = "DELETE_FROM_SHOPPINGLIST_FAILED"
export const SHOPPINGLIST_LOADING = "SHOPPINGLIST_LOADING"

//actions
export const getList = () => {
	return dispatch => {
	 let getObject = {
		  method: "GET",
		  mode: "cors",
		  credentials:"include",
		  headers: {"Content-Type":"application/json"}
	}
	dispatch(shoppingListLoading());
	fetch("/api/shopping", getObject).then((response) => {
		if(response.ok) {
			response.json().then((data) => {
				dispatch(getShoppingListSuccess(data));
			}).catch((error) => {
				dispatch(getShoppingListFailed("Problem loading shopping list"));
			})
		} else {
			dispatch(getShoppingListFailed("Response not ok. Status:"+response.status));
		}
	}).catch((error) => {
		dispatch(getShoppingListFailed("Problem loading shopping list"));		
	});
  }  
}

export const addToList = (item) => {
    return dispatch => {
	  let postObject = {
		  method: "POST",
		  mode: "cors",
		  credentials:"include",
		  headers: {"Content-Type":"application/json"
		  },
		  body:JSON.stringify(item)
	}
	dispatch(shoppingListLoading());
	fetch("/api/shopping", postObject).then((response) => {
		if(response.ok) {
			dispatch(addToShoppingListSuccess());
			dispatch(getList());
		} else {
			dispatch(addToShoppingListFailed("Response not ok. Status:"+response.status));
		}
	}).catch((error) => {
		dispatch(addToShoppingListFailed("Server responded with error"));
	});	  
  }
}  

export const removeFromList = (id) => {
	  return dispatch => {
	  let deleteObject= {
			method:"DELETE",
			mode:"cors",
			credentials:"include",
			headers:{"Content-Type":"application/json"}
	  }
	  dispatch(shoppingListLoading());
	  fetch("/api/shopping/"+id,deleteObject).then((response) => {
		if(response.ok) {
			dispatch(deleteFromShoppingListSuccess());
			dispatch(getList());
		} else {
			dispatch(deleteFromShoppingListFailed("Response not ok. Status:"+response.status))
		}
	}).catch((error) => {
		dispatch(deleteFromShoppingListFailed("Server responded with error"))
	});	  
  }
}  
//action creators

const getShoppingListSuccess = (list) => {
	return {
		type:GET_SHOPPINGLIST_SUCCESS,
		list:list
	}
} 

const getShoppingListFailed = (error) => {
	return {
		type:GET_SHOPPINGLIST_FAILED,
		error:error
	}
}

const addToShoppingListSuccess = () => {
	return {
		type:ADD_TO_SHOPPINGLIST_SUCCESS
	}
}

const addToShoppingListFailed = (error) => {
	return {
		type:ADD_TO_SHOPPINGLIST_FAILED,
		error:error
	}
}

const deleteFromShoppingListSuccess = () => {
	return {
		type:DELETE_FROM_SHOPPINGLIST_SUCCESS		
	}
}

const deleteFromShoppingListFailed = (error) => {
	return {
		type:DELETE_FROM_SHOPPINGLIST_FAILED,
		error:error
	}
}

const shoppingListLoading = () => {
	return {
		type:SHOPPINGLIST_LOADING
	}
}