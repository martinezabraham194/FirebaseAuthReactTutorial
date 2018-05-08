import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD3EKjW0tk_jRpjv_AgiQspuS8lCPjH1-4",
    authDomain: "bill-calculation.firebaseapp.com",
    databaseURL: "https://bill-calculation.firebaseio.com",
    projectId: "bill-calculation",
    storageBucket: "bill-calculation.appspot.com",
    messagingSenderId: "561448095208"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const auth = firebase.auth();
  
  export {
    auth,
  };