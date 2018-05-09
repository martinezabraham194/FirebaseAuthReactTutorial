import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import SignUpLink from '../SignUp/SignUpLink/SignUpLink';

const login = ({history}) =>
  <div>
    <h1>Login</h1>
    <LoginForm history={history} />
    <SignUpLink />
  </div>

export default withRouter(login);