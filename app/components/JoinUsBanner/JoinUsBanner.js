import React from 'react';
import './style.scss';


export default class JoinUsBanner extends React.Component {
  constructor() {
    super();
    this.state = {
    };

    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleSignUpClick() {
    return this;
  }

  render() {
    return (
      <div className="travaxy-join-banner py-5 text-center">
        <div className="title">
          <p className="inline">Join the evergrowing Travaxy</p> <p className="inline"> community and get a chance</p><br />
          <p className="inline">to see the world like you have never</p> <p className="inline"> seen it before</p>
        </div>
        <button
          className="mt-5 sign-up"
          onClick={this.handleSignUpClick}
        >
          Sign Up
        </button>
        <div className="inline-text mt-3">
          Already have an account? <b>Sign in</b>
        </div>
      </div>
    );
  }
}
