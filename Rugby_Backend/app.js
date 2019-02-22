function myFunction() {
  // Initialize Firebase
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

  const docRef = firestore.doc("samples/gameData");
  const outputHeader = document.querySelector("#gameScore");
  const inputTextField = document.querySelector("#lastestGameScore");
  const saveButton = document.querySelector("#saveButton");

  saveButton.addEventListener("click", function() {
    const textToSave = inputTextField.value;
    console.log("Saving " + textToSave + " to Firestore");
    docRef.set({
      gameScore: textToSave
    }).then(function() {
      console.log("Status saved!");
      // DEBUGGING
    }).catch(function (error) {
      console.log("Got an error: ", error);
    });
  })
}


function fieldcheck() {
  var op = document.getElementById("service").getElementsByTagName("option");
  for (var i = 0; i < op.length; i++) {
  // lowercase comparison for case-insensitivity
  (op[i].value.toLowerCase() == "9:00am-9:20am")
    ? op[i].disabled = true
    : op[i].disabled = false ;
  }
}
