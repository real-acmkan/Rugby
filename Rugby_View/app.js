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
  //firebase.initializeApp(config);
  var firestore = firebase.firestore();
  // End of Firebase Initialization

  var docRef = firestore.doc("samples/gameData");

  docRef.get().then(function(doc) {
    if (doc.exists) {
      console.log("Document data: ", doc.data());
    } else {
      console.log("Content does not exist");
    }
  }).catch(function(error) {
    console.log("Error: ", error);
  });

  getRealtimeUpdates = function() {
    docRef.onSnapshot(function (doc) {
      if (doc && doc.exists) {
        var myData = doc.data();
        console.log(myData);
      }
    });
  }
  getRealtimeUpdates();
}
