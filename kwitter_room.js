var firebaseConfig = {
      apiKey: "AIzaSyAZuK9clEOBPw67aTTDoRxT0hy4IvLnK0Q",
      authDomain: "kwitterrithvik.firebaseapp.com",
      databaseURL: "https://kwitterrithvik-default-rtdb.firebaseio.com",
      projectId: "kwitterrithvik",
      storageBucket: "kwitterrithvik.appspot.com",
      messagingSenderId: "669129099880",
      appId: "1:669129099880:web:c8e67451d9226b058389dd"
    };
firebase.initializeapp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_message.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_message.html";
    }
