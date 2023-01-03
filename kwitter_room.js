var firebaseConfig = {
      apiKey: "AIzaSyBcBSP1tqSJCX3ZSpcVDjKhynFF0JRLaf0",
      authDomain: "kwitter-f85f0.firebaseapp.com",
      databaseURL: "https://kwitter-f85f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-f85f0",
      storageBucket: "kwitter-f85f0.appspot.com",
      messagingSenderId: "213037915135",
      appId: "1:213037915135:web:1a41cbe538c364685f25ca"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 
 user_name = localStorage.getItem("user");
 document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room = document.getElementById("room").value;
      firebase.database().ref("/").child(room).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room", room);
      window.location = "kwitter_page.html";
}

 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log(Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'> #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoom(name)
{ console.log(name); 
  localStorage.setItem("room", name); 
  window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room");
      localStorage.removeItem("user");
      window.location = "index.html";
}