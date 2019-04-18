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

    saveButton.addEventListener("click", function () {
        const textToSave = inputTextField.value;
        var gameScore = 'TODO';
        var gameData = {
          gameScore: textToSave
        };
        console.log("Saving " + gameData + " to Firestore");
        docRef.set(gameData).then(function () {
            console.log("Status saved!");
            // DEBUGGING
        }).catch(function (error) {
            console.log("Got an error: ", error);
        });
    })
}
