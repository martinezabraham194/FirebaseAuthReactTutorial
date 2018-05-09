import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../../../constants/routes';

const navigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Landing</Link></li>
    <li><Link to={routes.LOGIN}>Sign In</Link></li>
  </ul>

export default navigationNonAuth;