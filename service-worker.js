"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/intelli-guide/index.html","dcbcabe2a4846d80943473e316aa967a"],["/intelli-guide/static/css/main.ceaded33.css","97a2586b8808dccb24a3bb287c19e9f7"],["/intelli-guide/static/js/main.b3be74d6.js","700433361cbc00804b217f42fe44f03a"],["/intelli-guide/static/media/daddyLongLegs.7c8bac86.jpg","7c8bac861686e740a81dfbebfe0c7512"],["/intelli-guide/static/media/daliFooter.94accad3.svg","94accad323e952f31ca79b4ed49641f2"],["/intelli-guide/static/media/daliHead.9dfdda3d.svg","9dfdda3d73b88ce5ecbd406ccba37792"],["/intelli-guide/static/media/decoded.6e023878.jpg","6e023878cc3bb86e2efc45e54ca150d2"],["/intelli-guide/static/media/enigma.8f3be68f.png","8f3be68fd29e7b13ec9c6e73cb0a40e0"],["/intelli-guide/static/media/itemFooterLeft.3748cb4e.svg","3748cb4e750b7d1d571aedb54c9f3d6d"],["/intelli-guide/static/media/itemFooterRight.6ff33727.svg","6ff33727a87db9bd54d438a6c6ff60cd"],["/intelli-guide/static/media/schiap.1e6e960e.png","1e6e960e825dc0720c42c035df671722"],["/intelli-guide/static/media/toreador.aac95027.png","aac95027d5b62f04069a27489e4c4df0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/intelli-guide/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});