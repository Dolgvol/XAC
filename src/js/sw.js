// // about:debugging#/runtime/this-firefox
// // проверяем поддержку браузером
// if ('serviceWorker' in navigator) {
//    console.log('Сервис-воркер поддерживается')
//    // осуществляем регистрацию после загрузки страницы
//    // для этого добавляем обработчик события "load"
//    window.addEventListener('load', () => {
//       // регистрируем сервис-воркер
//       navigator.serviceWorker
//          .register('/service-worker.js')
//          .then(registration => {
//             // регистрация прошла успешно
//             console.log(`Сервис-воркер успешно зарегистрирован, scope: ${registration.scope}`)
//             // scope - подмножество контента, которое находится под контролем сервис-воркера
//          })
//    })
//       .catch(error => {
//          // регистрация провалилась
//          console.log(`В процессе регистрация возникла ошибка: ${error}`)
//       })
// }

// // создание кеша
// // название кеша
// const CACHE_NAME = 'example.com-v1'
// // выбираем файлы для кеширования
// const cacheAssets = ['index.html', 'about.html', 'js/main.js']
// // добавляем обработчик события "install"
// self.addEventListener('install', e => {
//    console.log('Сервис-воркер установлен')
//    e.waitUntil(
//       caches
//          .open(CACHE_NAME)
//          .then(cache => {
//             console.log('Сообщение от сервис-воркера: файлы кешируются')
//             cache.addAll(cacheAssets)
//          })
//          .then(() => {
//             self.skipWaiting()
//          })
//    )
// })
// // 1 Определяем название кеша (example.com-v1).
// // 2 Выбираем файлы для кеширования. Для этого создаем массив.
// // 3 Внутри обработчика события «install» велим браузеру ожидать завершения промиса, затем открываем кеш, 
// // который будет сохранен под именем «example.com-v1».
// // 4 Наконец, добавляем выбранные файлы в кеш.

// // удаление старых версий кеша
// // добавляем обработчик события "activate"
// self.addEventListener('activate', e => {
//    console.log('Сервис-воркер активирован')
//    e.waitUntil(
//       caches.keys().then(cacheNames => {
//          return Promise.all(
//             cacheNames.map(cache => {
//                if (cache !== CACHE_NAME) {
//                   console.log('Производится удаление старого кеша')
//                   return caches.delete(cache)
//                }
//             })
//          )
//       })
//    )
// })

// // получение ответа
// // добавляем обработчик события "fetch"
// self.addEventListener('fetch', e => {
//    e.respondWith(
//       fetch(e.request)
//          .then(res => {
//             const copyCache = res.clone()
//             caches.open(CACHE_NAME).then(cache => {
//                cache.put(e.request, copyCache)
//             })
//             return res
//          })
//          .catch(error => caches.match(e.request).then(res => res))
//    )
// })

