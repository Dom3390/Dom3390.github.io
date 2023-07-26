const firebaseConfig = {
    apiKey: "AIzaSyAfZbmPrU68Ud-j_84Ha8xm-Qi9oBJCTQE",
    authDomain: "my-landing-page-819b9.firebaseapp.com",
    databaseURL: "https://my-landing-page-819b9-default-rtdb.firebaseio.com",
    projectId: "my-landing-page-819b9",
    storageBucket: "my-landing-page-819b9.appspot.com",
    messagingSenderId: "6339012929",
    appId: "1:6339012929:web:be0a56e091b5292a7199c0",
    measurementId: "G-JW2Q1QKPZ2"
  };
//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref('contactForm')

document.getElementById("contactform").addEventListener("submit", submitform);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal ("emailid");
    var msgContent = getElementVal("msgContent");

}
const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
    
}
const getElementVal = (id) => {
    return document.getElementbyid(id).value;
};
    
