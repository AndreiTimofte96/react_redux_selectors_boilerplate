import { createSelector } from 'reselect';

const selectValue = (state) => state.homePAGE123;

const makeIsPending = () => createSelector(
  selectValue,
  (currentState) => currentState.isPending
);

const makeIsSuccess = () => createSelector(
  selectValue,
  (currentState) => currentState.isSuccess
);


const makeServerData = () => createSelector(
  selectValue,
  (currentState) => currentState.serverData
);


export {
  selectValue,
  makeIsPending,
  makeIsSuccess,
  makeServerData
};
