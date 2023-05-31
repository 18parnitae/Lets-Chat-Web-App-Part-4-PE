 var firebaseConfig = {
  apiKey: "AIzaSyDcgD9oLjdzT3WazK4OH08HGSk0smrKEB0",
  authDomain: "letschat-4-pe.firebaseapp.com",
  projectId: "letschat-4-pe",
  databaseURL:"https://letschat-4-pe-default-rtdb.firebaseio.com/",
  storageBucket: "letschat-4-pe.appspot.com",
  messagingSenderId: "589100901625",
  appId: "1:589100901625:web:7e6d918d1be40d0f0a6e28",
  measurementId: "G-28JE9XXVY1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "chat_page.html";
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_name = childKey;
    //Start code
    console.console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}