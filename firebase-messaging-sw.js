importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js')


var config = {
  apiKey: '',
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
  firebase.initializeApp(config);
  
  const messaging = firebase.messaging();

  messaging.setBackgroundMessageHandler(()=>{
     const title = 'Hello World'
     const options = {
         body: payload.data.status 
     } 
    return self.registration.showNotification(title, options)
  });