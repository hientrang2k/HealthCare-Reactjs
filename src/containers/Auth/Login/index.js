import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import * as actions from '../../../store/actions';
import { Box, Grid, Button } from '@mui/material';
import './style.scss';
import google from './img/google.png';
import facebook from './img/facebook.png';
import { handleLogin } from '../../../services/userService';

const style = {
  width: 400,
  backgroundColor: '#fff',
  borderRadius: 15,
  boxShadow: '4px 4px 6px #000',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px 24px',
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showPassword: false,
      errMessage: '',
    };
  }

  handleChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
      errMessage: '',
    });
  };

  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
      errMessage: '',
    });
  };

  showPass = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleSubmit = async () => {
    this.setState({
      errMessage: '',
    });
    try {
      let data = await handleLogin(this.state.username, this.state.password);
      console.log(data);
      if (data && data?.userData?.errCode !== 0) {
        this.setState({
          errMessage: data?.userData?.errMessage,
        });
      }
      if (data && data?.userData?.errCode === 0) {
        this.props.userLoginSuccess(data.user);
        console.log('Success');
      }
    } catch (error) {
      this.setState({
        errMessage: error?.response?.data?.message,
      });
    }
  };

  render() {
    return (
      <div className='login-screen'>
        <div className='bgr-login'>
          <Box sx={style}>
            <div className='login-title'>Login</div>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Grid className='text-field-item'>
                <label>User name</label>
                <input
                  type='text'
                  name='username'
                  className='input-item'
                  onChange={(event) => this.handleChangeUsername(event)}
                  value={this.state.username}
                />
              </Grid>
              <Grid className='text-field-item'>
                <label>Password</label>
                <div className='password-block'>
                  <input
                    type={this.state.showPassword ? 'text' : 'password'}
                    name='password'
                    className='input-item'
                    onChange={(event) => this.handleChangePassword(event)}
                    value={this.state.password}
                  />
                  <i
                    className={
                      this.state.showPassword
                        ? 'fas fa-eye showPasswordIcon'
                        : 'fas fa-eye-slash showPasswordIcon'
                    }
                    onClick={() => this.showPass()}
                  />
                </div>
              </Grid>
              <Grid style={{ color: 'red' }}>{this.state.errMessage}</Grid>
              <Button
                size='large'
                className='login-button'
                onClick={() => this.handleSubmit()}
              >
                LogIn
              </Button>
            </Box>
            <div className='forgotPassword'>Forgot password?</div>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div className='other-login'>--Or login with--</div>
              <div className='social-network'>
                <div className='social-google'>
                  <img alt='gg' src={google} width={24} height={24} />
                </div>
                <div>
                  <img alt='fb' src={facebook} width={24} height={24} />
                </div>
              </div>

              <div className='route-signup-block'>
                Don't have an account?{' '}
                <span className='route-signup'>Sign up</span>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
