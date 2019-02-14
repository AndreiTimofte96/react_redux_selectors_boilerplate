import { CHANGE_INPUT_VALUE } from './constants';
// The initial state of the App
const initialState = {
  value: ''
};

function changeValueReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        value: action.value
      };
    default:
      return state;
  }
}

export default changeValueReducer;
