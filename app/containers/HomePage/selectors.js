import { createSelector } from 'reselect';

const selectValue = (state) => state.homePAGE123;

const makeChangeValue = () => createSelector(
  selectValue,
  (currentState) => currentState.value
);

export {
  selectValue,
  makeChangeValue,
};
