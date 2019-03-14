import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { getServerData } from './actions';
import { makeIsPending, makeIsSuccess, makeServerData } from './selectors';
import reducer from './reducer';
import HomePage from './HomePage';

const mapDispatchToProps = (dispatch) => ({
  getServerData: () => getServerData()(dispatch)
});

const mapStateToProps = createStructuredSelector({
  isPending: makeIsPending(),
  isSuccess: makeIsSuccess(),
  serverData: makeServerData()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePAGE123', reducer });

export default compose(withReducer, withConnect)(HomePage);
