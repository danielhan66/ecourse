import {FETCH_AUTHORS_REQUEST, FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_FAILURE} from '../actions'
const initialState = { authors:[], isLoading: false, error: null };

const reducer = (state, action) => {
  state = state || initialState;

  console.log("action....:", action);

  switch(action.type){
    case FETCH_AUTHORS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case FETCH_AUTHORS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_AUTHORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        authors: action.authors
      };
    case FETCH_AUTHORS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default reducer;