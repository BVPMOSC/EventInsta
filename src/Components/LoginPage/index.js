import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { auth, login, googleSignIn } from "./../../helpers/auth";
import "./Login.css";


const docsButtonStyle = {
  position: "fixed",
  margin: "2em",
  bottom: 0,
  left: 0,
  animation: "back-to-docs 1.5s ease-in-out infinite",
  zIndex: 6
};

const style = (
  <style>{`
    @keyframes back-to-docs {
        0% { transform: translateY(0); }
        50% { transform: translateY(0.35em); }
        100% { transform: translateY(0); }
    }

  `}</style>
);

export default class Login extends Component {
  // noinspection SpellCheckingInspection
  sourceUrl = 'https://github.com/bvpmosc/eventinsta';
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading:false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.sourceButtonHandler = this.sourceButtonHandler.bind(this);
  }

  sourceButtonHandler(){
    window.open(this.sourceUrl,"_blank");
  }
  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({loading:true})
    login(email, password)
      .then(user => {
        this.setState({ email: "", password: "",loading:false});
        console.log(user);
      })
      .catch(error => {
        // eslint-disable-next-line
        this.setState({ email: "", password: "",loading:false});
        // eslint-disable-next-line
        error.message === "EMAIL_NOT_FOUND" ? auth(email, password) : "";
        // this.setState(setErrorMsg('Invalid username/password.'))
      });
  }

  render() {
    return (
      <div className="lp-full" >
        {style}
        <div className="login-form">

            <form className="login__form" onSubmit={this.handleLogin}>
              <header className="login__header">
                <h1
                  className="login__title bold"
                  style={{ fontSize: "2.3rem" }}
                >
                  EventInsta
                </h1>
              </header>
              <main className="login__main">
                <div className="login__group">
                  <input
                    className="login__input"
                    type="email"
                    name="input_email"
                    onChange={e => this.setState({ email: e.target.value })}
                    required
                  />
                  <label className="login__label">Email </label>
                  <div className="login__bar" />
                </div>
                <div className="login__group">
                  <input
                    className="login__input"
                    type="password"
                    name="input_password"
                    onChange={e => this.setState({ password: e.target.value })}
                    required
                  />
                  <label className="login__label">Password</label>
                  <div className="login__bar" />
                </div>
                <p className="login__terms">
                  By Signing in or clicking continue, I confirm that I have read
                  and agree to the
                  <a href=""> Terms</a> and
                  <a href=""> Privacy Policy</a>
                </p>
              </main>
              <footer className="login__footer">
                <input
                  className="login__button"
                  type="button"
                  name="btn_signin"
                  value={this.state.loading? "Loading":"Sign in"}
                  onClick={this.handleLogin}
                />
                <input
                  className="login__button"
                  type="button"
                  id="gb"
                  name="btn_signin"
                  value="Google"
                  onClick={() =>
                    googleSignIn()
                      .then(result => {
                        if (result.credential) {
                          // This gives you a Google Access Token. You can use it to access the Google API.
                          // var token = result.credential.accessToken;
                          // ...
                        }
                        console.log(result);
                        this.props.gsignin(result.user);
                      })
                      .catch(err => console.log(err))
                  }
                />
              </footer>
            </form>
        </div>
        <div style={docsButtonStyle}>
          <Button
            id="git-show"
            to={`https://github.com/bvpmosc/eventinsta`}
            color="black"
            icon="github"
            content="Source"
            target="_blank"
            onClick={this.sourceButtonHandler}
          />
        </div>
      </div>
    );
  }
}
