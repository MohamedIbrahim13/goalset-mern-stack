const initialState = { auth: null };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      //console.log("Register", action?.payload);
      localStorage.setItem("Account", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        auth: action.payload,
        isLoading: false,
        errors: false,
      };

    case "LOGIN":
      //console.log("Login", action?.payload);
      localStorage.setItem("Account", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        auth: action.payload,
        isLoading: false,
        errors: false,
      };
	case "LOGOUT":
      //console.log("Login", action?.payload);
      localStorage.removeItem("Account");
      return {
        ...state,
        auth: action.payload,
        isLoading: false,
        errors: false,
      };
    
    default:
      return state;
  }
};

export default authReducer;
