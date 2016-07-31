import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import styles from './Login.scss';

export default class Login extends Component {
  static propTypes = {
    user: PropTypes.object,
    loginError: PropTypes.object,
    login: PropTypes.func,
    pushState: PropTypes.func.isRequired,
    loginWithFacebook: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    const responseFacebook = (response) => {
      console.log(response);

      const { email, accessToken, name, userID } = response;
      if (!accessToken) {
        return;
      }

      this.props.loginWithFacebook(
        email, accessToken, name, userID
      );
    };

    const autoLoad = false;
    return ReactDOM.render(
      <div className={ styles.facebookLogin }>
        <FacebookLogin
          appId="1106706166035032"
          fields="email, name"
          autoLoad={ autoLoad }
          callback={ responseFacebook.bind(this) } />
        </div>,
      document.getElementById('facebookLogin')
    );
  }

  componentWillUnmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('facebookLogin'));
  }

  responseFacebook = (response) => {
    console.log(response);
  }

  render() {
    const { user } = this.props;
    return (
      <div className={ styles.loginPage + ' container' }>
        <Helmet title="Login"/>
        <h2>Login</h2>
        { this.props.loginError &&
          <p className= { styles.error }> { this.props.loginError.message }</p>
        }
        {!user &&
        <div>
          <form className={ styles.form } role="form" onSubmit={ this.handleClickOnLogin }>
            <div className={ styles.group }>
              <input type="text" ref="email" id="email" required />
               <span className={ styles.highlight }></span>
               <span className={ styles.bar }></span>
               <label>Email</label>
            </div>
            <div className={ styles.group }>
              <input type="password" ref="password" id="pwd" required />
              <span className={ styles.highlight }></span>
              <span className={ styles.bar }></span>
              <label>Password</label>
            </div>
            <button className={ styles.loginButton } onClick={ this.handleClickOnLogin }><i className="fa fa-sign-in"/>{' '}
              Log In
            </button>
            <button className={ styles.registerButton } onClick={ this.handleClickOnRegister }><i className="fa fa-register"/>{' '}
              Register
            </button>
          </form>
        </div>
        }
        { user &&
          <div>
            <code>You are currently logged in as { user.email }.</code>
          </div>
        }
      </div>
    );
  }
}
