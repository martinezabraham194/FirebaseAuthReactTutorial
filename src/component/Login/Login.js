import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import SignUpLink from '../SignUp/SignUpLink/SignUpLink';
import PasswordForgetLink from '../Password/PasswordForgetLink/PasswordForgetLink';

const login = ({history}) =>
  <div>
    <h1>Login</h1>
    <LoginForm history={history} />
    <SignUpLink />
    <PasswordForgetLink />
  </div>

export default withRouter(login);