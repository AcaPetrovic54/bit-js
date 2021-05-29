var welcomeMessage = 'Hello World!';

console.log(welcomeMessage);


function printHello() {
    console.log ("hello");
 }
 printHello();
 
 // window.navigator
 function printBrowserInfo() {
     console.log(navigator.platform);
     console.log(navigator.appVersion);
     console.log(navigator.vendor);
 }
 printBrowserInfo();
 
 function isOnline() {
     if (navigator.onLine) {
         console.log("Online");
     } else {
         console.log("Offline");
         }
 }
 
 isOnline();

//window.screen
function getScreenDimension() {
    console.log("Available screen dimesions: " + screen.availWidth + "x" + screen.availHeight);
    console.log("Screen dimensions: " + screen.width + "x" + screen.height);
}
getScreenDimension();


// window.location
function urlData() {
    console.log("full url adderss: " + location.href);
    console.log("host name: " + location.hostname);
    console.log("used protocol: " + location.protocol);
    console.log("requestParams: " + location.search);
}

urlData();

function reloadPage() {
    location.reload();
}

function redirectPage(address) {
    location.assign(address);
}
// redirectPage("https://www.google.com");


// window.localStorage
function storeData(key, value) {
    localStorage.setItem(key, value);
}

function readData(key) {
    var data = localStorage.getItem(key) || "Where is no data";
    console.log(data);
}

function removeData(key) {
    localStorage.removeItem(key);
}



 // Check browser support
//if (typeof(Storage) !== "undefined") {
    // Store
    //localStorage.setItem("lastname", "Smith");
    // Retrieve
    //document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  //} else {
    //document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
 // }
 