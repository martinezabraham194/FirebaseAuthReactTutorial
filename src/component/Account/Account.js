import React from 'react';

import AuthUserContext from '../../constants/AuthUserContext';
import PasswordForgetForm from '../Password/PasswordForgetForm';
import PasswordChangeForm from '../PasswordChange/PasswordChange';
import withAuthorization from '../../hoc/withAuthorization';

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    }
  </AuthUserContext.Consumer>

  const authCondition = (authUser) = !!authUser;

export default withAuthorization(authCondition)(AccountPage);