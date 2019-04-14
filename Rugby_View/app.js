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
  const getGameID = document.querySelector("#email");
  const loadButton =  document.querySelector('#loadButton');

  docRef.get().then(function (doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      const gameID = getGameID.value;
      outputHeader.innerText = "Game Score is: " + myData.gameID;
    }
  }).catch(function (error) {
    console.log("Got an error: ", error);
  });
}
