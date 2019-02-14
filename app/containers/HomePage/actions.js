import { CHANGE_INPUT_VALUE } from './constants';

export function changeInputValue(value) {
  return (dispatch) => {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value
    };

    dispatch(action);
  };
}
