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

user = localStorage.getItem("user")
room = localStorage.getItem("room")

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room).push({
            message:msg,
            like:0,
            name:user
      });

document.getElementById("msg").value = " ";
}




function getData() { firebase.database().ref("/"+room).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data["name"]
message=message_data["message"]
like=message_data["like"]

name_tag = "<h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_tag = "<h4 class='message_h4'>"+ message + "</h4>";
button_1 = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
button_2 = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span> </button> <hr>";

row = name_tag + message_tag + button_1 + button_2;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) 
{     
      button_id = message_id; 
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1; 
      console.log(updated_likes); 
      firebase.database().ref(room).child(button_id).update({ like : updated_likes }); 
}