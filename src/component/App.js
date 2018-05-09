import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as firebase from 'firebase';

import Navigation from './Navigation/Navigation';
import LandingPage from '../component/LandingPage/LandingPage';
import SignUpPage from '../component/SignUp/SignUp';
import LoginPage from '../component/Login/Login';
import HomePage from '../component/Home/Home';
import * as routes from '../constants/routes';
import withAuthentication from '../hoc/withAuthentication';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({authUser}))
        : this.setState(() => ({authUser: null}))
    })
  }
  
    render() {
        return (
          <Router>
          <div>
            <Navigation authUser={this.state.authUser}/>
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
    );
  }
}

export default withAuthentication(App);
