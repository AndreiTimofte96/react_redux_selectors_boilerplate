import React from 'react';
// import { Link } from 'react-router-dom';
import './style.scss';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      isPending: false,
      isSuccess: false,
      serverData: null
    };
  }

  componentDidMount() {
    this.props.getServerData();
  }

  // componentDidUpdate(prevProps) {
  //   const _state = this.state;
  //   const { isPending, isSuccess, serverData } = this.props;
  //   if (isPending !== prevProps.isPending) {
  //     _state.isPending = isPending;
  //       this.setState(_state); //eslint-disable-line
  //   }

  //   if (isSuccess !== prevProps.isSuccess && isSuccess
  //     && serverData !== prevProps.serverData && serverData) {
  //     _state.serverData = serverData;
  //       this.setState(_state); //eslint-disable-line
  //   }
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { isPending, isSuccess, serverData } = prevState;
    if (isPending !== nextProps.isPending) {
      return {
        isPending: nextProps.isPending
      };
    }

    if (isSuccess !== nextProps.isSuccess && serverData !== nextProps.serverData) {
      return {
        isSuccess: nextProps.isSuccess,
        serverData: nextProps.serverData
      };
    }
    return null;
  }

  render() {
    const { isPending, serverData } = this.state;
    console.log(this.state);
    return (
      <div className="container-fluid">
        <div className="row">
          <section className="p-0 py-2 p-sm-5">

            {serverData && serverData.a.b}
            {serverData && serverData.c}
            {serverData && this.props.serverData.d}
          </section>
          {isPending && 'PENDING'}
        </div>
      </div>
    );
  }
}
