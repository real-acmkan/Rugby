function myFunction() {
  // Initialize Firebase
  'use strict';
  var config = {
    apiKey: "AIzaSyBTbdewBsyAH1VUgYpQqXZ2tkCqT49Rm0I",
    authDomain: "rugbytest-6f0d9.firebaseapp.com",
    databaseURL: "https://rugbytest-6f0d9.firebaseio.com",
    projectId: "rugbytest-6f0d9",
    storageBucket: "rugbytest-6f0d9.appspot.com",
    messagingSenderId: "474217368223"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  // firebase.initializeApp(config);
  // End of Firebase Initialization

  // Get date to pull games by day
  var date = new Date();
  var time = date.getDate();

  //Data location
  var docRef = database.ref("gameData2");

  // Get realtime data and sync object changes
  docRef.on("value", snap => {
    // TODO
  });
}
