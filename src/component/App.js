import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import LandingPage from '../component/LandingPage/LandingPage';
import SignUpPage from '../component/SignUp/SignUp';
import LoginPage from '../component/Login/Login';
import HomePage from '../component/Home/Home';
import * as routes from '../constants/routes';


const app = () => (
  <Router>
    <div>
      <Navigation />
      <hr/>

      <Route
        exact path={routes.LANDING}
        component={() => <LandingPage />}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={() => <SignUpPage />}
      />
      <Route
        exact path={routes.LOGIN}
        component={() => <LoginPage />}
      />
      <Route
        exact path={routes.HOME}
        component={() => <HomePage />}
      />

    </div>
  </Router>
)

export default app;
