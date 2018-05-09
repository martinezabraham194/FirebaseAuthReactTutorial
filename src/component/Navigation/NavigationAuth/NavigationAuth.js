import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../../constants/routes';
import SignOut from '../../SignOut/SignOut';

const navigationAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.HOME}>Home</Link></li>
    <li><SignOut /></li>
  </ul>

  export default navigationAuth;