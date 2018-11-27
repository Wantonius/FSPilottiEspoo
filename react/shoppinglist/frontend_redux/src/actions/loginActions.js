export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const LOGIN_LOADING = "LOGIN_LOADING";

// Actions

export const register = (user) => {
	  return dispatch => {
		  let registerObject = {
			  method:"POST",
			  mode:"cors",
			  headers:{"Content-Type":"application/json"},
			  body:JSON.stringify(user)
			  }
		  fetch("/register",registerObject).then((response) => {
			  if(response.ok) {
				  dispatch(registerSuccess());
				  alert("Register successful!");
			  } else {
				  dispatch(registerFailed("Username already in use"));
				  alert("Username already in use");
			  }
		  }).catch((error) => {
			  dispatch(registerFailed("Server not responding"));
		  })
	   }		
}
// Action creators

const registerSuccess = () => {
	return {
		type:REGISTER_SUCCESS
	}
}

const registerFailed = (error) => {
	return {
		type:REGISTER_FAILED,
		error:error
	}
}

const loginSuccess = () => {
	return {
		type:LOGIN_SUCCESS
	}
}

const loginFailed = (error) => {
	return {
		type:LOGIN_FAILED,
		error:error
	}
}

const logoutSuccess = () => {
	return {
		type:LOGOUT_SUCCESS
	}
}

const logoutFailed = (error) => {
	return {
		type:LOGOUT_FAILED,
		error:error
	}
} 

const loadingLogin = () => {
	return {
		type: LOGIN_LOADING
	}
}