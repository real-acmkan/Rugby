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
  firebase.initializeApp(config);
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

  var field = document.getElementById('service');
  var operator = document.getElementById('budget');
  field.onchange = function () { fieldcheck(); }
  operator.onchange = function () { fieldcheck(); }
  fieldcheck();

    if (field.value == '9:00am-9:20am') {
        for (i = 0; i < operator.options.length; ++i) {
            if (operator.options[i].value != 'SB 1 vs SB 4') {
                operator.options[i].disabled = true;
            }
        };
        operator.value = 'SB 1 vs SB 4';
    } else {
        for (i = 0; i < operator.options.length; ++i) {
            operator.options[i].disabled = false;
        };
    }
    /*
    if (field.value == '')  {
      for (i = 0; i < operator.options.length; ++i) {
        if (operator.options[i].value != '')  {
          operator.options[i].disabled = true;
        }
      };
      operator.value = '';
    } else {
        for (i = 0; i < operator.options.length; ++i) {
          operator.options[i].disabled = false;
        };
    }
    */
}
