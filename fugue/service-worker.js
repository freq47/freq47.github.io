/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "af4f12bbdf5a5c8436a3e2da8301891c"
  },
  {
    "url": "assets/css/styles.styles.773af5d9.css",
    "revision": "0fb5dfce255eb91adcce4c85e8414173"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.0cb6f2af.js",
    "revision": "c005fbc8209e1adf2c17c95ac5dc8679"
  },
  {
    "url": "assets/js/1.141a265a.js",
    "revision": "c30201587135fcb3e71a25128039fddd"
  },
  {
    "url": "assets/js/10.5444d0db.js",
    "revision": "57eb5a82817b39160c69e218c4ea49ca"
  },
  {
    "url": "assets/js/11.53153734.js",
    "revision": "919f664dbfd66647590d41942eb5a849"
  },
  {
    "url": "assets/js/12.eaadf85f.js",
    "revision": "09ba6a5ef55f01adcd7eb91c0861b4b5"
  },
  {
    "url": "assets/js/13.93e4472e.js",
    "revision": "7c96f708b930fe48e05a65cf0cb125a7"
  },
  {
    "url": "assets/js/14.59379446.js",
    "revision": "6baa128b4185b7639b34a13e9084eb7e"
  },
  {
    "url": "assets/js/15.9f8bbab8.js",
    "revision": "206b7795891a23317e5b322fd8950085"
  },
  {
    "url": "assets/js/16.94fcbffa.js",
    "revision": "5ae993fc09cac7dea5ac79d192b3e489"
  },
  {
    "url": "assets/js/17.8acb3330.js",
    "revision": "c284757ec94c974f02bc5d21ae3efa8b"
  },
  {
    "url": "assets/js/18.76b9846b.js",
    "revision": "923e4c57c9e3acbd9592670f6991514b"
  },
  {
    "url": "assets/js/19.6d489607.js",
    "revision": "0921b3beb03b07966b3c42c9e1cb8d3a"
  },
  {
    "url": "assets/js/2.1bb5c235.js",
    "revision": "b177fe21275e1985a5c33b4db50b1888"
  },
  {
    "url": "assets/js/3.7dd2934f.js",
    "revision": "89299da7f8f4cfeddf139c7c27d1eeca"
  },
  {
    "url": "assets/js/4.78c3c232.js",
    "revision": "0b79ca00abae4b8eb93dd021d2ed079a"
  },
  {
    "url": "assets/js/5.be31eaca.js",
    "revision": "046fd56adc5f460a7695fa18b73bea01"
  },
  {
    "url": "assets/js/6.dee21f3f.js",
    "revision": "4d9842893506bd68fa4aed89525bde8f"
  },
  {
    "url": "assets/js/7.1a93995e.js",
    "revision": "11c1923f670cdbd32acccd7cf3cc6ba2"
  },
  {
    "url": "assets/js/8.fa92f9af.js",
    "revision": "c82e6a774b0a28121e679227a70b2aa8"
  },
  {
    "url": "assets/js/9.10a1298e.js",
    "revision": "e37e2e83b5c1199f199c6cf14e2cbbf2"
  },
  {
    "url": "assets/js/app.6517ce76.js",
    "revision": "e321961b7e077906315e1b4f371b2736"
  },
  {
    "url": "assets/js/styles.773af5d9.js",
    "revision": "7e6ec9b37bbc507f9827913f40ad2f8f"
  },
  {
    "url": "D_icon.png",
    "revision": "e0bad428dad73739c5c3248f89c3153e"
  },
  {
    "url": "Figure_1.png",
    "revision": "3bc3bbfe1b2403ee6d347e89557f98c5"
  },
  {
    "url": "Figure_10.png",
    "revision": "8fa7b640c08d1ce931393bcf65f9fba2"
  },
  {
    "url": "Figure_11.png",
    "revision": "4def9223d13c9df644bb2b13a740c727"
  },
  {
    "url": "Figure_2.png",
    "revision": "7cf6015a92122edf09b44ea4366adde0"
  },
  {
    "url": "Figure_3.png",
    "revision": "798647fb3f92e50694e3210f41e328e5"
  },
  {
    "url": "Figure_4.png",
    "revision": "798647fb3f92e50694e3210f41e328e5"
  },
  {
    "url": "Figure_5.png",
    "revision": "cf4f0e6ede2361166bc5bed1e7451113"
  },
  {
    "url": "Figure_6.png",
    "revision": "bccb52648017ab8fc0f5035f4274978b"
  },
  {
    "url": "Figure_7.png",
    "revision": "a2ad574e8492bccc28df60b6f40c8e60"
  },
  {
    "url": "Figure_7a.png",
    "revision": "8374690b9535e7aa361effa0273477f6"
  },
  {
    "url": "Figure_7b.png",
    "revision": "68bdc6136d39632e291bbdc20522ac55"
  },
  {
    "url": "Figure_8.png",
    "revision": "4f3210f892fc5bc40ef4035d85672cbc"
  },
  {
    "url": "Figure_9.png",
    "revision": "0199755f43e06d2726a4a5ae9a6308d2"
  },
  {
    "url": "Fugue_Values.png",
    "revision": "23aa76ff5b430d196cdf02653d2d3dea"
  },
  {
    "url": "Fugues/index.html",
    "revision": "5e5960160c9ff14aceb03798794b73de"
  },
  {
    "url": "GameModes/index.html",
    "revision": "a60d53c1f8673b78e742f7c6e5e9f499"
  },
  {
    "url": "Gameover/index.html",
    "revision": "35e50be9a06d3d8a24bf024c36ca79de"
  },
  {
    "url": "Gameplay/index.html",
    "revision": "8e65ff94a46a575735892b4198088529"
  },
  {
    "url": "I_icon.png",
    "revision": "377f43155d724f5c880f2121307ac9d4"
  },
  {
    "url": "index.html",
    "revision": "ef8c72ca37f9ed00bcf39e050282e418"
  },
  {
    "url": "Introduction/index.html",
    "revision": "c7fcbf778e96a99d81977154d11ff96e"
  },
  {
    "url": "Meeple_B.png",
    "revision": "d91215a5828637ffe07e47f1f2227406"
  },
  {
    "url": "Meeple_G.png",
    "revision": "8c121376db18e345aa8b22dd05ecd21f"
  },
  {
    "url": "Meeple_P.png",
    "revision": "a19c3a60f9e05e2fd0399dfa0f8b9c02"
  },
  {
    "url": "Meeple_Y.png",
    "revision": "05583afb520afccdfc8abb93a5736c8b"
  },
  {
    "url": "Meeples.png",
    "revision": "2576c7e5e97416f30aa2ee00ad4802ea"
  },
  {
    "url": "P_icon.png",
    "revision": "9a033a336656137b8c5cd4093d7f99de"
  },
  {
    "url": "Phases/index.html",
    "revision": "b75c988f22c4c1744b50dd73c59dc698"
  },
  {
    "url": "S_icon.png",
    "revision": "3029d80b3209bef315be38c1093e6ec7"
  },
  {
    "url": "SetExplanationAndExamples/index.html",
    "revision": "d885a0889019aa53075056858649fa1d"
  },
  {
    "url": "Setup/index.html",
    "revision": "1e839ceb79f5e6f85472d922c9be3500"
  },
  {
    "url": "SoloModes/index.html",
    "revision": "4ca2509e7123acba0bddb611d7e631c4"
  },
  {
    "url": "SpiritCards/index.html",
    "revision": "208a1a746a88bbea0ccfb01b280604dc"
  },
  {
    "url": "V_icon.png",
    "revision": "99e583c1a3452d42451925055f4cba69"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
