  // Initialize Firebase
  var config = {
    apiKey: '',
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
  

  // get permission for sending push notifications adn get fcm token

  const messaging = firebase.messaging();
  messaging.requestPermission()
  .then(()=>{
    console.log('have permissions')
    return messaging.getToken()
  })
  .then((token)=>{
    console.log(token) // this is the fcm token of this device save this to database
  })
  .catch(()=>{
    console.log('permission denied')
  })

  messaging.onMessage((payload)=>{
      console.log("apps's main page", payload)
  })


let legacy_server_key = ''    // you can get this key from  <path to your firebase project>/settings/cloudmessaging/

function sendNotification(){
  $.ajax({
    type: 'POST',
    url: "https://fcm.googleapis.com/fcm/send",
    headers: { Authorization: 'key=' + legacy_server_key },
    contentType: 'application/json',
    dataType: 'json',
    data: JSON.stringify({
      // hard coded fcm token of my device use your own
        "to": "fC98OVYNC1w:APA91bHOQu2q6ritOp11W9S5IfiH1qVrjOohW53NqC2yCCJXGfLvOX-Gx1_giVQ9Jay25n5XIK-HxbWbWe3Z_wSEJV0ppG8jhTx-XmgUi-btkfGSEi08iIFLc-GTMUG_Hp0vaR20JJjp",
        "notification": {
            "title": "New Message Received",
            "body": "hello, this is new message",
            "icon": "https://cdn.pixabay.com/photo/2019/04/02/04/18/graphic-4096885_960_720.png"  // dont know why but image is not showing on notification popup
            
        }
    }),
    success: function(response) {
        console.log('success',response);
        //Functions to run when notification is succesfully sent to reciever
    },
    error: function(xhr, status, error) {
        //Functions To Run When There was an error While Sending Notification
        console.log('error',xhr.error);
    }
  });  
}