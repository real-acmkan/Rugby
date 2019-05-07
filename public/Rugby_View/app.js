function myFunction() {
  // Initialize Firebase
  'use strict';
  var config = {
    apiKey: "AIzaSyBTbdewBsyAH1VUgYpQqXZ2tkCqT49Rm0I",
    authDomain: "rugbytest-6f0d9.firebaseapp.com",
    databaseURL: "https://rugbytest-6f0d9.firebaseio.com",
    projectId: "rugbytest-6f0d9",
    storageBucket: "rugbytest-6f0d9.appspot.com",
    messagingSenderId: "474217368223",
    appId: "1:474217368223:web:982346b400fb4aac"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  //firebase.initializeApp(config);
  // End of Firebase Initialization

  // Data location
  var docRef = firebase.database().ref("gameData");

  // Get realtime data and sync changes through event type "child_added"
  docRef.on("child_added", function(data) {
    var content = data.val();
    document.getElementById(content.uid).innerHTML = content.score;
  });

  // Get realtime data and sync changes through event type "child_changed"
  docRef.on("child_changed", function(data) {
    var updated = data.val();
    document.getElementById(updated.uid).innerHTML = updated.score;
  });
}
