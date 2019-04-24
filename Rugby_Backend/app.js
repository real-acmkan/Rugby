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
  const outputHeader = document.querySelector("#gameScore");
  const inputTextField = document.querySelector("#lastestGameScore");
  const saveButton = document.querySelector("#saveButton");

  const textToSave = inputTextField.value;
  var e = document.getElementById("gameDivision");
  var d = e.options[e.selectedIndex].text;
  var g = document.getElementById("divTeam");
  var i = g.options[g.selectedIndex].text;
  var h = document.getElementById("service");
  var l = h.options[h.selectedIndex].text;
  var gameScore = d + " " + i + " vs " + d + " " + l;
  var gameData = {
    [gameScore]: textToSave
  };
  console.log("Saving " + gameData + " to Firestore");
  docRef.update(gameData).then(function() {
    // DEBUGGING
    alert("Success!");
    console.log("Status saved!");
  }).catch(function(error) {
    alert("Error: ", error);
    console.log("Got an error: ", error);
  });
}
