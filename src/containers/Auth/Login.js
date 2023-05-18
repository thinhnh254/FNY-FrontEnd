import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          {/* Sign up */}
          {/* <div className="sign-up">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <p>or use email for registration</p>
              <input type="text" name="txt" placeholder="Name" required="" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <button>Sign up</button>
            </form>
          </div> */}

          {/* Sign in */}
          <div className="sign-in">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </div>
              <p>or use your account</p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <a href="#">Forget your password?</a>
              <button>Sign in</button>
            </form>
          </div>
          {/* Overlay */}
          <div className="overlay-container">
            <div className="overlay">
              {/* <div className="overlay-left">
                <h1>Wellcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button id="signIn">Sign In</button>
              </div> */}
              <div className="overlay-right">
                <h1>Hello, Friend</h1>
                <p>Enter your personal details and start journey with us</p>
                <button id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
