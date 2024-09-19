const CACHE_NAME = 'gym-app-cache';
const urlsToCache = [
  // './',
  // './index.html',
  // './JSs/ex_history.js',
  // './JSs/exercise.js',
  // './JSs/history.js',
  // './JSs/index.js',
  // './JSs/legs1.js',
  // './JSs/legs2.js',
  // './JSs/pull1.js',
  // './JSs/pull2.js',
  // './JSs/push1.js',
  // './JSs/push2.js',
  // './JSs/workout.js',
  // './CSS/done.css',
  // './CSS/ex_history.css',
  // './CSS/ex.css',
  // './CSS/ex+wk.css',
  // './CSS/history.css',
  // './CSS/index.css',
  // './CSS/workout.css',
  // './HTMLs/done.html',
  // './HTMLs/ex_history.html',
  // './HTMLs/history.html',
  // './HTMLs/workout.html',
  // './HTMLs/workouts/legs1/legs1.html',
  // './HTMLs/workouts/legs1/exercises/ex1.html',
  // './HTMLs/workouts/legs1/exercises/ex2.html',
  // './HTMLs/workouts/legs1/exercises/ex3.html',
  // './HTMLs/workouts/legs1/exercises/ex4.html',
  // './HTMLs/workouts/legs1/exercises/ex5.html',
  // './HTMLs/workouts/legs1/exercises/ex6.html',
  // './HTMLs/workouts/legs1/exercises/ex7.html',
  // './HTMLs/workouts/legs1/warmup/warmup1.html',
  // './HTMLs/workouts/legs1/warmup/warmup2.html',
  // './HTMLs/workouts/legs1/warmup/warmup3.html',
  // './HTMLs/workouts/legs1/warmup/warmup4.html',
  // './HTMLs/workouts/legs1/warmup/warmup5.html',
  // './HTMLs/workouts/legs1/warmup/warmup6.html',
  // './HTMLs/workouts/legs2/legs2.html',
  // './HTMLs/workouts/legs2/exercises/ex1.html',
  // './HTMLs/workouts/legs2/exercises/ex2.html',
  // './HTMLs/workouts/legs2/exercises/ex3.html',
  // './HTMLs/workouts/legs2/exercises/ex4.html',
  // './HTMLs/workouts/legs2/exercises/ex5.html',
  // './HTMLs/workouts/legs2/exercises/ex6.html',
  // './HTMLs/workouts/legs2/exercises/ex7.html',
  // './HTMLs/workouts/legs2/exercises/ex8.html',
  // './HTMLs/workouts/legs2/warmup/warmup1.html',
  // './HTMLs/workouts/legs2/warmup/warmup2.html',
  // './HTMLs/workouts/legs2/warmup/warmup3.html',
  // './HTMLs/workouts/legs2/warmup/warmup4.html',
  // './HTMLs/workouts/legs2/warmup/warmup5.html',
  // './HTMLs/workouts/legs2/warmup/warmup6.html',
  // './HTMLs/workouts/pull1/pull1.html',
  // './HTMLs/workouts/pull1/exercises/ex1.html',
  // './HTMLs/workouts/pull1/exercises/ex2.html',
  // './HTMLs/workouts/pull1/exercises/ex3.html',
  // './HTMLs/workouts/pull1/exercises/ex4.html',
  // './HTMLs/workouts/pull1/exercises/ex5.html',
  // './HTMLs/workouts/pull1/exercises/ex6.html',
  // './HTMLs/workouts/pull1/exercises/ex7.html',
  // './HTMLs/workouts/pull1/warmup/warmup1.html',
  // './HTMLs/workouts/pull1/warmup/warmup2.html',
  // './HTMLs/workouts/pull1/warmup/warmup3.html',
  // './HTMLs/workouts/pull1/warmup/warmup4.html',
  // './HTMLs/workouts/pull2/pull2.html',
  // './HTMLs/workouts/pull2/exercises/ex1.html',
  // './HTMLs/workouts/pull2/exercises/ex2.html',
  // './HTMLs/workouts/pull2/exercises/ex3.html',
  // './HTMLs/workouts/pull2/exercises/ex4.html',
  // './HTMLs/workouts/pull2/exercises/ex5.html',
  // './HTMLs/workouts/pull2/exercises/ex6.html',
  // './HTMLs/workouts/pull2/exercises/ex7.html',
  // './HTMLs/workouts/pull2/warmup/warmup1.html',
  // './HTMLs/workouts/pull2/warmup/warmup2.html',
  // './HTMLs/workouts/pull2/warmup/warmup3.html',
  // './HTMLs/workouts/push1/push1.html',
  // './HTMLs/workouts/push1/exercises/ex1.html',
  // './HTMLs/workouts/push1/exercises/ex2.html',
  // './HTMLs/workouts/push1/exercises/ex3.html',
  // './HTMLs/workouts/push1/exercises/ex4.html',
  // './HTMLs/workouts/push1/exercises/ex5.html',
  // './HTMLs/workouts/push1/exercises/ex6.html',
  // './HTMLs/workouts/push1/exercises/ex7.html',
  // './HTMLs/workouts/push1/warmup/warmup1.html',
  // './HTMLs/workouts/push1/warmup/warmup2.html',
  // './HTMLs/workouts/push1/warmup/warmup3.html',
  // './HTMLs/workouts/push1/warmup/warmup4.html',
  // './HTMLs/workouts/push2/push2.html',
  // './HTMLs/workouts/push2/exercises/ex1.html',
  // './HTMLs/workouts/push2/exercises/ex2.html',
  // './HTMLs/workouts/push2/exercises/ex3.html',
  // './HTMLs/workouts/push2/exercises/ex4.html',
  // './HTMLs/workouts/push2/exercises/ex5.html',
  // './HTMLs/workouts/push2/exercises/ex6.html',
  // './HTMLs/workouts/push2/exercises/ex7.html',
  // './HTMLs/workouts/push2/warmup/warmup1.html',
  // './HTMLs/workouts/push2/warmup/warmup2.html',
  // './HTMLs/workouts/push2/warmup/warmup3.html',
  // './images/icon-192x192.png',
  // './images/icon-512x512.png'
];

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        if (response) {
          return response; // Return the cached response if found
        }
        return fetch(event.request).then(networkResponse => {
          // Check if cache is already populated
          return cache.keys().then(keys => {
            if (keys.length === 0) {
              // Cache all specified files if cache is empty
              cache.addAll(urlsToCache);
            }
            cache.put(event.request, networkResponse.clone()); // Cache the new response
            return networkResponse; // Return the network response
          });
        });
      }).catch(error => {
        console.error('Fetch failed:', error);
        throw error;
      });
    })
  );
});