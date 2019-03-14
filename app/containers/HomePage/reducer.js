import { GET_SERVER_DATA_PENDING, GET_SERVER_DATA_SUCCESS } from './constants';
// The initial state of the App
const initialState = {
  serverData: null,
  isPending: false,
  isSuccess: false
};

function changeValueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SERVER_DATA_PENDING:
      return {
        ...state,
        isPending: action.isPending
      };
    case GET_SERVER_DATA_SUCCESS:
      return {
        ...state,
        isSuccess: action.isSuccess,
        serverData: action.serverData
      };
    default:
      return state;
  }
}

export default changeValueReducer;
