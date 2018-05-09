import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import SignOut from '../SignOut/SignOut';
import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationNonAuth from './NavigationNonAuth/NavigationNonAuth';
import AuthUserContext from '../../constants/AuthUserContext';

const Navigation = () => (
  <AuthUserContext.Consumer>
      { authUser => authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
      }
  </AuthUserContext.Consumer>
)

export default Navigation;