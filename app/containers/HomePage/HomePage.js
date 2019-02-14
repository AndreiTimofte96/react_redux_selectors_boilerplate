import React from 'react';
// import { Link } from 'react-router-dom';
import './style.scss';

export default class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };


    this.onInputChange = this.onInputChange.bind(this);
  }

  componentWillReceiveProps(props) {
    const _state = this.state;
    _state.inputValue = props.value;
    this.setState(_state);
  }

  onInputChange(evt) {
    if (evt.target.value.length >= 3) {
      this.props.changeInputValue(evt.target.value);
    }
  }


  render() {
    const { inputValue } = this.state;
    return (
      <div className="container-fluid"><br /><br /><br /><br />
        <div className="row">
          <section className="izi-content p-0 py-2 p-sm-5">
            <input type="text" onChange={this.onInputChange} placeholder="type something" />
            This is from redux: {inputValue}
          </section>
          <br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
}
