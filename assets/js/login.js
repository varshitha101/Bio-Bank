let firebaseConfig = {
  // apiKey: "AIzaSyD9zJiGQZnotj50EdNVfRFHG73kXtZUwHs",
  // authDomain: "shankara-cancer-screening.firebaseapp.com",
  // databaseURL: "https://shankara-cancer-screening-default-rtdb.firebaseio.com",
  // projectId: "shankara-cancer-screening",
  // storageBucket: "shankara-cancer-screening.appspot.com",
  // messagingSenderId: "1060039489072",
  // appId: "1:1060039489072:web:656c1638465a19c3f89ff5",
  // measurementId: "G-KWC8MT2VYQ"
  // apiKey: "AIzaSyDMiYPWOzoOwJB3mIxy-92iYvmPviT_iao",
  // authDomain: "testing-shankaracare-web.firebaseapp.com",
  // databaseURL: "https://testing-shankaracare-web-default-rtdb.firebaseio.com",
  // projectId: "testing-shankaracare-web",
  // storageBucket: "testing-shankaracare-web.appspot.com",
  // messagingSenderId: "684280929303",

  // staging
  // appId: "1:684280929303:web:0a6c2b4be861eb83aa1052",
  // measurementId: "G-5R8TF7ZCH4",
  // apiKey: "AIzaSyAa7rCSqGnLb8T89YtQsCOx7LcspzH_4Y8",
  // authDomain: "sarvarakshana-staging.firebaseapp.com",
  // databaseURL: "https://sarvarakshana-staging-default-rtdb.firebaseio.com",
  // projectId: "sarvarakshana-staging",
  // storageBucket: "sarvarakshana-staging.appspot.com",
  // messagingSenderId: "203498484262",
  // appId: "1:203498484262:web:3b00873564b12d250a2ce7",
  // measurementId: "G-GDEMDDZRX3"

  // deployment
  apiKey: "AIzaSyAFXlXxezJPDcw8qcjm45rqbu9Drl-3YDk",
  authDomain: "sarvarakshana-deployment.firebaseapp.com",
  databaseURL: "https://sarvarakshana-deployment-default-rtdb.firebaseio.com",
  projectId: "sarvarakshana-deployment",
  storageBucket: "sarvarakshana-deployment.appspot.com",
  messagingSenderId: "675533937929",
  appId: "1:675533937929:web:35698bb27dc57cb87e87d8",
  measurementId: "G-E9G48X6P80"

  // devolopment
  // apiKey: "AIzaSyDxwWanrz_T-FQICF89Vl6HGKS7TBixrek",
  // authDomain: "sarvarakshana-development.firebaseapp.com",
  // databaseURL: "https://sarvarakshana-development-default-rtdb.firebaseio.com",
  // projectId: "sarvarakshana-development",
  // storageBucket: "sarvarakshana-development.appspot.com",
  // messagingSenderId: "345813046788",
  // appId: "1:345813046788:web:a43b5531f81f21c8e90751",
  // measurementId: "G-D9PJ9QT6C7"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

var app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

console.log("now data is fetching : " + firebaseConfig);
import { showToast } from './toastmsg.js';
console.log("Help me");


let internetConnectionStatus = window.navigator.onLine ? "Online" : "OFFline";
if (internetConnectionStatus == "OFFline") {
  showToast("No Internet connection..!! Check your internet connectivity or try again later");
}


fnBrowserDetect();
function fnBrowserDetect() {

  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }

  if (browserName !== "chrome") {
    showToast("please use google chrome browser for better experience");
  }
  //document.querySelector("h1").innerText="You are using "+ browserName +" browser";         
}


var username = document.getElementById("email");
var password = document.getElementById("password");
var buttonClick = document.getElementById("rememberMe");
//console.log("localStorage.RadioButtonValue : ",localStorage.RadioButtonValue);

username.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    password.focus();
  }
});

password.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    submit();
  }
});


if ((localStorage.username !== undefined) && (localStorage.password !== undefined)) {
  username.value = localStorage.username;
  password.value = localStorage.password;
  buttonClick.checked = ((username.value == "") && (password.value == "")) ? (buttonClick.checked = false) : (buttonClick.checked = true);
}
const element1 = document.getElementById("submit_button");
element1.addEventListener("click", submit);

/* var enter = document.getElementById("loginform"); */
/* enter.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter") {
      event.preventDefault();
      submit();
    }
  }); */


function submit() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  const rmCheck = document.getElementById("rememberMe");

  // Remember me functionality
  if (rmCheck.checked) {
    localStorage.username = email;
    localStorage.password = password;
    localStorage.RadioButtonValue = rmCheck.checked;
  } else {
    localStorage.username = "";
    localStorage.password = "";
  }

  // Check internet connection status
  if (internetConnectionStatus === "Online") {
    if (email === "" && password === "") {
      showToast("Please enter email and password");
    } else if (email === "") {
      showToast("Please enter the email");
    } else if (password === "") {
      showToast("Please enter the password");
    } else {
      // Firebase authentication
      // Automatically append "@ts.com" if it's not already included
      if (!email.includes('@')) {
        email += '@ts.com';
      }


      let isLoggedIn = false;

      signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

          const user = userCredential.user;
          const userId = user.uid;
          console.log("Login successful! User ID: ", userId);
          const roleRef = ref(database, 'users/' + userId + '/role');
          get(roleRef)
            .then((snapshot) => {
              if (snapshot.exists()) {
                console.log('Role:', snapshot.val());
                const role = snapshot.val();
                isLoggedIn = true;
                showToast('Loggedin Successfull!');
                // alert('Loggedin Successfull!');

                sessionStorage.setItem('isLoggedIn', true);
                sessionStorage.setItem('role', role);
                if (role === "Doctor") {
                  window.location.href = "doc.html";
                } else if (role === "FM") {
                  window.location.href = "field_mgr_sur.html";
                } else if (role === "Psychiatrist") {
                  window.location.href = "tcc.html";
                } else if (role === "OPH" || role === "Director") {
                  window.location.href = "op_head_dir.html";
                }else if(role=== "FW"){
                  window.location.href="login.html"
                  console.log('No role found for this user.');
                  showToast('Invalid email format.');
                }
              } else {
                console.log('No role found for this user.');
              }
            })
            .catch((error) => {
              console.error('Error fetching role:', error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode === 'auth/wrong-password') {
            alert('Incorrect password. Please try again.');
            showToast('Incorrect password. Please try again.');
          } else if (errorCode === 'auth/user-not-found') {
            alert('No user found with this email/ID.');
            showToast('No user found with this email/ID.');
          } else if (errorCode === 'auth/invalid-email') {
            alert('Invalid email format.');
            showToast('Invalid email format.');
          } else {
            alert(`Error: ${errorMessage}`);
          }
        });
    }
  } else {
    showToast("No Internet connection..!! Check your internet connectivity or try again later");
  }
}
