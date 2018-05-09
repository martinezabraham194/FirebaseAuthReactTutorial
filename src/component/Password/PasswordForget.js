import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../firebase';

const passwordForgetPage = () =>
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>

  export default passwordForgetPage;