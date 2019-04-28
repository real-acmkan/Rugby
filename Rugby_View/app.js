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

  //Get date to pull games by day
  var date = new Date();
  var time = date.getDate();

  //Document location
  var docRef = firestore.doc("samples/gameData");

  if (time == "11") {
    var docRef = firestore.doc("samples/gameData2");
  }

  //use get() to pull document data once
  docRef.get().then(function(doc) {
    if (doc.exists) {
      //debugging
      console.log("Document data: ", doc.data());

    } else {
      alert("Certain scores may not exist yet!");
      console.log("Content does not exist");
    }
  }).catch(function(error) {
    //more debugging
    alert("An error occured: ", error);
    console.log("Error: ", error);
  });
  //Initialize realtime listener to avoid refreshing
  //USES A TON OF READS
  var getRealtimeUpdates = function() {
    docRef.onSnapshot(function(doc) {
      if (doc && doc.exists) {
        var myData = doc.data();
        console.log(myData);
      }
    });
  }
  //call function getRealtimeUpdates
  //NOTE: USES A TON OF READS
  //getRealtimeUpdates();
}
