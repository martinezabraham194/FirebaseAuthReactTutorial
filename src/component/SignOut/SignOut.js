import React from 'react';

import { auth } from 'firebase';

const signOut = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Sign Out
  </button>

export default signOut;