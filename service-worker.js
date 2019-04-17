
// self.addEventListener('push',function (event){
//     var notification = event.data.json().notification
//     console.log(notification)
//     var title = notification.title;
//     var body = notification.body;
//     // var url = notification.click_action;
//     var icon = './images/Olx_icon.png';
    
//     event.waitUntil(
//       self.registration.showNotification(title,{
//         body: body,
//         icon: icon
//         // data: url
//       })
//     );
    
    
//     });
//     // self.addEventListener('notificationclick', function (event) {
//     //   console.log('on notification click: ', event.notification);
//     //   event.notification.close();
//     //   clients.openWindow(event.notification.data);
//     // });
    
    
    
    
    
//     var dataCacheName = 'olxPwa';
//     var cacheName = 'olx';
//     var filesToCache = [
//       '/',
//       '/index.html',
//       '/home.html',
//       '/submit.html',
//       '/login.html',
//         '/app.js',
//       '/style.css',
//       '/style1.css',
//       '/images/Olx_icon.png',
//       '/images/ssd.jpg',
//       '/images/background.png',
//       '/images/in.jpg',
    
      
      
      
    
      
//     ];
    
//     self.addEventListener('install', function(e) {
//       self.skipWaiting();
//       console.log('[ServiceWorker] Install');
//       e.waitUntil(
//         caches.open(cacheName).then(function(cache) {
//           console.log('[ServiceWorker] Caching app shell');
//           return cache.addAll(filesToCache);
//         })
//       );
//     });
    
//     self.addEventListener('activate', function(e) {
//       console.log('[ServiceWorker] Activate');
//       e.waitUntil(
//         caches.keys().then(function(keyList) {
//           return Promise.all(keyList.map(function(key) {
//             if (key !== cacheName) {
//               console.log('[ServiceWorker] Removing old cache', key);
//               return caches.delete(key);
//             }
//           }));
//         })
//       );
     
//       return self.clients.claim();
//     });
    
//     self.addEventListener('fetch',function(e){
//       // console.log(e.request)
//       e.respondWith(
//           caches.match(e.request)
//           .then((response)=>{
//               // console.log('fetching Data')
//               return response || fetch(e.request)
//           })
//       )
//     })