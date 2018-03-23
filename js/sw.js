"use strict";
/* Service Worker */
console.log("File called");
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("v2").then(function(cache) {
    	console.log("Opened cache");
      return cache.addAll([
        "/",
        "/restaurant.html",
        "/css/styles.css",
        "/data/restaurants.json",
        "/js/dbhelper.js",
        "/js/main.js",
        "/js/restaurant_info.js",
        "/js/sw.js",
    		"/img/1.jpg",
    		"/img/2.jpg",
    		"/img/3.jpg",
    		"/img/4.jpg",
    		"/img/5.jpg",
    		"/img/6.jpg",
    		"/img/7.jpg",
    		"/img/8.jpg",
    		"/img/9.jpg",
        "/img/10.jpg"
      ]);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("Service Worker activating.");  
});

self.addEventListener("fetch", function(event) {
	// console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
      	console.log("response");
      	return response;
      }

      console.log("event.request");
      return fetch(event.request);
    })
  );
});