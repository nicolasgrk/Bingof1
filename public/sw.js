if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const r=e=>n(e,c),t={module:{uri:c},exports:o,require:r};s[c]=Promise.all(i.map((e=>t[e]||r(e)))).then((e=>(a(...e),o)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/401-faa1e5aa49a92b6e.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/457b8330-96cd22fef5b8bff1.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/4bd1b696-019454ec3e81fd6c.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/761-804763d46b5b6964.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/907-444ed789245fd7ae.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/app/_not-found/page-6058b3046810985b.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/app/classement/page-a83ed41b6fff724b.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/app/layout-71e5ea974c0bee67.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/app/page-ebf7d7e44c6604db.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/main-97d80e5a19e68459.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/main-app-e4038898c04abf77.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/pages/_app-eef484fc49b57a90.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/pages/_error-5933f280f2bada68.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-a1569e7bd3aaf3cb.js",revision:"p3YOw4OlPysh8j-PFjz7O"},{url:"/_next/static/css/2dea0c5fbbda28cf.css",revision:"2dea0c5fbbda28cf"},{url:"/_next/static/css/e5d1744ed76cb479.css",revision:"e5d1744ed76cb479"},{url:"/_next/static/media/569ce4b8f30dc480-s.p.woff2",revision:"ef6cefb32024deac234e82f932a95cbd"},{url:"/_next/static/media/747892c23ea88013-s.woff2",revision:"a0761690ccf4441ace5cec893b82d4ab"},{url:"/_next/static/media/93f479601ee12b01-s.p.woff2",revision:"da83d5f06d825c5ae65b7cca706cb312"},{url:"/_next/static/media/ba015fad6dcf6784-s.woff2",revision:"8ea4f719af3312a055caf09f34c89a77"},{url:"/_next/static/p3YOw4OlPysh8j-PFjz7O/_buildManifest.js",revision:"027d265bce4e2ac10c9c29d144cc1383"},{url:"/_next/static/p3YOw4OlPysh8j-PFjz7O/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/android/android-launchericon-144-144.png",revision:"8733bfee6d320d66238b7042aed5dd94"},{url:"/icons/android/android-launchericon-192-192.png",revision:"b42854f9bf084c782fadac81807e6abb"},{url:"/icons/android/android-launchericon-48-48.png",revision:"5eb41e220f0c1110aa833644b113ade6"},{url:"/icons/android/android-launchericon-512-512.png",revision:"7c1b5b3833aacfde0f133ba0ed0b9aab"},{url:"/icons/android/android-launchericon-72-72.png",revision:"38d703f1d2cb2bc1f5836674982372d9"},{url:"/icons/android/android-launchericon-96-96.png",revision:"841bc47d49f0ed950a37e38a6eb7e0a4"},{url:"/icons/icons.json",revision:"a291acf90eb5e3afa590c540ffa74236"},{url:"/icons/ios/100.png",revision:"928d5d0f0eca3d3c563a6701c6b0d411"},{url:"/icons/ios/1024.png",revision:"63cbffdf41c29167523bd632318a5de6"},{url:"/icons/ios/114.png",revision:"88302a9cb319525a47c37d802b853a52"},{url:"/icons/ios/120.png",revision:"a69e03be62966f35e725249b3861d02f"},{url:"/icons/ios/128.png",revision:"90440ee27df35250bf9d0b4557e10759"},{url:"/icons/ios/144.png",revision:"8733bfee6d320d66238b7042aed5dd94"},{url:"/icons/ios/152.png",revision:"303c7149a545885ea06e61f2d0929add"},{url:"/icons/ios/16.png",revision:"922da3e0c6b91a0c11e4a5cf0f9bdee4"},{url:"/icons/ios/167.png",revision:"aad0055ec02f99dda94277a2a6761cdc"},{url:"/icons/ios/180.png",revision:"ac60c22954513c4134085632c137d4e8"},{url:"/icons/ios/192.png",revision:"b42854f9bf084c782fadac81807e6abb"},{url:"/icons/ios/20.png",revision:"16b9e11e2938c623e0ab85ac8c8b28f3"},{url:"/icons/ios/256.png",revision:"0fc412d8841e25c7296d07556e4f7cd5"},{url:"/icons/ios/29.png",revision:"6067be0fbd0bdc513c7c67700f209506"},{url:"/icons/ios/32.png",revision:"af26defeaeede05e28122f4fdc1676fb"},{url:"/icons/ios/40.png",revision:"ca76fab56025c62e39386ea7764d9938"},{url:"/icons/ios/50.png",revision:"54501e7232e6c2be54461cbef4b93cf9"},{url:"/icons/ios/512.png",revision:"7c1b5b3833aacfde0f133ba0ed0b9aab"},{url:"/icons/ios/57.png",revision:"f1a312d4a23704325f43795d75de4ca4"},{url:"/icons/ios/58.png",revision:"68729e5b24066ba32725945b2052bcf1"},{url:"/icons/ios/60.png",revision:"1df0d52e6e16bcce9f242fe19d0e705d"},{url:"/icons/ios/64.png",revision:"c1ab29e36a52d853fc4c16f659385925"},{url:"/icons/ios/72.png",revision:"38d703f1d2cb2bc1f5836674982372d9"},{url:"/icons/ios/76.png",revision:"cd82357106d5b5d026850d30eef8be24"},{url:"/icons/ios/80.png",revision:"44ffa194f2a4b12ff275186cf0cf20c8"},{url:"/icons/ios/87.png",revision:"b87413997c25be1793275eef5d663268"},{url:"/manifest.json",revision:"0438435f031395f1db8c4574d23947a2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.sameOrigin,n=e.url.pathname;return!(!s||n.startsWith("/api/auth/callback")||!n.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,n=e.url.pathname,i=e.sameOrigin;return"1"===s.headers.get("RSC")&&"1"===s.headers.get("Next-Router-Prefetch")&&i&&!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,n=e.url.pathname,i=e.sameOrigin;return"1"===s.headers.get("RSC")&&i&&!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.url.pathname;return e.sameOrigin&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
