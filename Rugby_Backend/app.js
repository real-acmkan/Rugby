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

  //Get date to sort games
  var date = new Date();
  var n = date.getDate();

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
  var gameScore = "May " + n + " " + d + " " + i + " vs " + d + " " + l;
  var gameData = {
    [gameScore]: textToSave
  };
  if (n == "11") {
    var docRef = firebase.database().ref("gameData2");
  } else {
    var docRef = firebase.database().ref("gameData");
  }
  console.log("Saving " + gameData + " to Firestore");
  docRef.update({
    [gameScore]: {
      uid: gameScore,
      score: textToSave
    }
  }).then(function() {
    // DEBUGGING
    alert("Success!");
    console.log("Status saved!");
  }).catch(function(error) {
    alert("Error: ", error);
    console.log("Got an error: ", error);
  });
}
