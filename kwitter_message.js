var firebaseConfig = {
    apiKey: "AIzaSyAZuK9clEOBPw67aTTDoRxT0hy4IvLnK0Q",
    authDomain: "kwitterrithvik.firebaseapp.com",
    databaseURL: "https://kwitterrithvik-default-rtdb.firebaseio.com",
    projectId: "kwitterrithvik",
    storageBucket: "kwitterrithvik.appspot.com",
    messagingSenderId: "669129099880",
    appId: "1:669129099880:web:c8e67451d9226b058389dd"
  };
  firebase.initializeApp(firebaseConfig);
  var user_name=localStorage.getItem("user_name");
  var room_name=localStorage.getItem("room_name");
function send(){
var msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";

}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter_page.html";
  }