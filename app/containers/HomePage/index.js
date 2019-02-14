import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { changeInputValue } from './actions';
import { makeChangeValue } from './selectors';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (value) => changeInputValue(value)(dispatch)
});

const mapStateToProps = createStructuredSelector({
  value: makeChangeValue(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePAGE123', reducer });

export default compose(withReducer, withConnect)(HomePage);
