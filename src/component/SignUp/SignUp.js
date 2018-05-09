import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import SignUpForm from './SignUpForm/SignUpForm';
import SignUpLink from './SignUpLink/SignUpLink';

const signUp = ({history}) => (
  <div>
    <SignUpForm history={history}/>
  </div>
)

export default withRouter(signUp);