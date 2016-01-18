import React from 'react';
import { Textfield, Button } from 'react-mdl';
import Parse from 'parse'

Parse.initialize("UgWiek4QsjcypdJtzBMTg79GfdKmAFclvwHcLciy", "FhhV4qn8d4DTACGBGwGiAmVd8twUBHVeGQMeqA6F");

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        console.log("Error logging in", err);
    })
  }

  render() {
    return(
        <div className="login-dialog">
        <form ref="form" className="mdl-card mdl-shadow--2dp" style={{margin: 'auto', textAlign: 'center'}}>
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">
              Have an account? Log in!
            </h2>
          </div>
          <div className="mdl-card__supporting-text">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input ref="user" className="mdl-textfield__input" type="user" id="user" valueLink={this.linkState('user')} />
              <label className="mdl-textfield__label" htmlFor="email" required="true">User</label>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input ref="pass" className="mdl-textfield__input" type="password" id="password" valueLink={this.linkState('password')}/>
              <label className="mdl-textfield__label" htmlFor="password">Password</label>
            </div>
            <br/>
            <div className="mdl-card__actions mdl-card--border">
              <button ref="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent mdl-js-ripple-effect">
                Log In
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default Login;
