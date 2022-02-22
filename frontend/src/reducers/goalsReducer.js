const initialState = { isLoading: true, goals: [] };

const goalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL":
      return { ...state, goals: action.payload, isLoading: false };
    case "CREATE":
      return { ...state, goals: [...state.goals, action.payload] };
    case "UPDATE":
      return {
        ...state,
        goals: state.goals.map(goal =>
          goal._id === action.payload._id ? action.payload : goal
        ),
      };
    case "DELETE":
      return {
        ...state,
        goals: state.goals.filter(goal => goal._id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default goalsReducer;
