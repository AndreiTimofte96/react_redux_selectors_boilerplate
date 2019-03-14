import { GET_SERVER_DATA_SUCCESS, GET_SERVER_DATA_PENDING } from './constants';

const serverData = {
  a: {
    b: 1
  },
  c: 2,
  d: 3
};

export function getServerData() {
  return (dispatch) => {
    dispatch({
      type: GET_SERVER_DATA_PENDING,
      isPending: true
    });
    setTimeout(() => {
      dispatch({
        type: GET_SERVER_DATA_PENDING,
        isPending: false
      });
      dispatch({
        type: GET_SERVER_DATA_SUCCESS,
        isSuccess: true,
        serverData
      });
    }
      , 3000);
  };
}
