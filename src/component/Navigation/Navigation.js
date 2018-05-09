import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../constants/routes';
import SignOut from '../SignOut/SignOut';
import NavigationAuth from './NavigationAuth/NavigationAuth';
import NavigationNonAuth from './NavigationNonAuth/NavigationNonAuth';

const Navigation = ({authUser}) => (
  <div>
    { authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>
)

export default Navigation;