if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let u={};const a=e=>n(e,c),o={module:{uri:c},exports:u,require:a};s[c]=Promise.all(i.map((e=>o[e]||a(e)))).then((e=>(t(...e),u)))}}define(["./workbox-6fb8223f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/OibyNybL7WUVt9uyNG_uk/_buildManifest.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/OibyNybL7WUVt9uyNG_uk/_middlewareManifest.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/OibyNybL7WUVt9uyNG_uk/_ssgManifest.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/1206-93cf32a06de30f02.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/1242-81d00dc74855eb81.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/2389-311884fb216c5328.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/2646-4ec7dccd9adc6b4b.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/2666-64ea96d6f0a58679.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/3107-e80d1936bbf47177.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/3308-6f9af9b66a14794b.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/3536-1ffd89f0050ac251.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/3859-877dc23392dc963e.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/4076-9e3010d8daa81769.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/4389-0e82a1d7923bbd46.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/4736-2fe5c5bc8cd3a45c.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/5171.df3dddfdebbcb662.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/7219-8179344ac693725a.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/7668-1c1e5a6879417051.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/7730-43a45f40dddb878a.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/8242-7ad2240616c5f5a4.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/850-5eebb982afa26bae.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/8529-194c9ef7b364025f.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/9238-19fa6ef488edbbcf.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/framework-9fb5a1929308ee93.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/main-883b4cac7401f72d.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/404-21576b4e371e6650.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/_app-cd1685a6817742ff.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/_error-25839e52160ad85d.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs-9b4f8a9a56ed049e.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Badge-17b6943c983b13db.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Breadcrumb-b38d19f87e098914.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Button-59b5dedff980243e.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Card-2f8aee6791605770.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/CheckGroup-a394be998969891a.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Checkbox-17195f76e435e3f4.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Chips-1e752d281ebb8771.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Code-0ffcdee6e7a77b85.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Column-7878a280659d0f84.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Container-85e4816cec7f5dda.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/CssBaseline-5a68bb95afd7e2b7.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Dialog-01e0e2708545d806.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Divider-30631c5efab9546c.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Flex-b514903b61494df9.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/FormControl-a3124e1176accbb2.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Icon-7d9fac7fd313d973.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Image-da319e8dafa7661f.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/InputAdornment-ac0a2668c680c225.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/InputSlider-251cb8ac2ee42e95.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/InputStepper-1af24028c244bb36.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Menu-ebb0dcdcc03b97ac.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Radio-e53f96edc03e66b9.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/RadioGroup-8f50232f2ceff8ba.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Row-5732465ac328859d.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Select-83d4760c245c9bb8.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Snackbar-1d4e1b8f0f859582.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Spinners-34020eb30ed9d9e2.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Switch-0afeece3893ba963.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/TabBar-579ed5813b32479a.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Table-8bc027d66d5862b5.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Tag-7346bc83e3d3d0e2.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Text-79f89c17272a22d0.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/TextArea-603a72306200f979.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/TextField-46b138232550e5bc.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/components/Tooltip-ed6e57bc6be2df95.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/installation-37140ced0f42cd70.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/packages/icons-ea581862bc7d06d3.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/server-side-rendering-79057fb4bc23d2c1.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/styling-c22c19e237cf1dda.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/docs/theming-3e14ba60fd0c89d4.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/pages/index-09a9d0b0f6369d8b.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/_next/static/chunks/webpack-b07270ad44e9cec8.js",revision:"OibyNybL7WUVt9uyNG_uk"},{url:"/android-chrome-192x192.png",revision:"719a15487c06e634997d88c77a857571"},{url:"/android-chrome-512x512.png",revision:"9a0a5de1cea847396452bb4abe928b38"},{url:"/android-chrome-maskable-256x256.jpg",revision:"c17e62c013f67d8983bc6aec53e62a4d"},{url:"/apple-touch-icon.png",revision:"50364e2cff000f565fb4a518df046616"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"e959a15a8541839149e83e02d2478e75"},{url:"/favicon-32x32.png",revision:"ebe15604738fbd26fe9ddb39296fc039"},{url:"/favicon.ico",revision:"2af328c7c6daf8572cec7b8f8d84f63e"},{url:"/manifest.json",revision:"f8117409c2a979907f67c9e6241f6a0b"},{url:"/meta-image-compressed.png",revision:"567edc68c4735f8fce56411c5f9db4d2"},{url:"/mstile-144x144.png",revision:"6b94ddff154918ef390ab65c36df3fbe"},{url:"/mstile-150x150.png",revision:"15bc84178c38783f5f8ec80ec85c385b"},{url:"/mstile-310x150.png",revision:"f3f6d21986f74783c516ea83c30d2007"},{url:"/mstile-310x310.png",revision:"628a609a77c69ac0000cbc5660068486"},{url:"/mstile-70x70.png",revision:"c7057e31d48d3418705a31ce9accd037"},{url:"/robots.txt",revision:"3ad0652bd17ff826a31fa29366021cfd"},{url:"/safari-pinned-tab.svg",revision:"f746d72124037ce82fbe613ecf0dd28c"},{url:"/static/media/landing-illustration-640.png",revision:"76c960d0b4799716895750347c7842db"},{url:"/static/media/landing-illustration.png",revision:"62b55a44faf9af73a5a2a4fc38445ab8"},{url:"/static/sonnat-icons.zip",revision:"9e6db0c34e94681e3b3d3b1384b0924a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
