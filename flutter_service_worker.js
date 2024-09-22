'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b3f5dfe7fcddd04ecefcffcf1c9d3931",
"version.json": "53ffeb9b53b28fe68b3f00221c3bea0e",
"index.html": "a5c97d6452a2547becff66fd2a57a4ce",
"/": "a5c97d6452a2547becff66fd2a57a4ce",
"main.dart.js": "417632d8f0778bce876543b102d196fd",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "67c2b07a2ec9715787654456d26fa4cc",
".git/config": "2ea92fcdaadbe84378269561c23e7ac0",
".git/objects/66/3bbc6288f32aa505684b54e979fb42417c5a3f": "160319da560a65b0b91f89c62186b36a",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/d0b5d551771b7bd295295b75b8cce230268593": "95be2b211e8c2df9edfff9831025e698",
".git/objects/d9/8c0ffc89a496f614b44521c285aeb92324a3ea": "9bdc6f370b25d8b1ee1bbd83f70bceb1",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/db986ba0c4fb70ea0a2803324d462fca9c16f7": "0a8c1c6c2434515bc38a04b4c7d1598e",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/79c620f629778d6233b56f17dd3767083b0530": "3cc43934970239e5b319bcb61fe05023",
".git/objects/b4/67f32a815827ed6b5cc66264eab53bc42efbb8": "7680bea528766fcda77e68db8ac35eed",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/729f5440ff03590d87619cc547ca2ab595b9f9": "21432d48a1fdc2b5784bbaf8859e033d",
".git/objects/ab/177f1a11452b1ba960ed2e1916aceb763e5e4e": "f176fc106d9a8be17e902d6c8ac77b6f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/5cb28c0cb4c6c05a45d85227980c704c6e4f4b": "fcc2565f56b1ff1bf00df16edbd27c87",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/0561cf1e49b756f6b07db78e16f2ef5e5191e3": "0cbd1418e1052aa370f2712185120982",
".git/objects/cf/31e716e4efcd582eea17df3a5fe8ad0e84c91e": "d5937a5b3d768b2bd3bc7303cf7453da",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c8/187ac719f30aa29e187ef80a1f956dcb68ff02": "478c796d4a093dac3963507064fdaf46",
".git/objects/c8/bdaf0022adc4a114051d9aa32f7919d6f3d890": "76dbd69dec1958d56bb38122e3727e89",
".git/objects/ed/0c34545ee538bf6252186f534c19c4a5028717": "3deb12ac0628d0b9e763b9a6dccdc9b5",
".git/objects/4e/a27a226253e87b3beced58ff67881f45648bc5": "66e7f182f8aabd05a04f47ac6c6e77fa",
".git/objects/20/e0bd2bfa818e6d894d4a92c17969240d99ab45": "f77c5864691d661e9d4d4d13b1f42ee2",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/42/96c2c513149427b55f8e331455ca0c9f824a0f": "092d52731852490a270bd1bca365a441",
".git/objects/74/9fcc285605e2fcecbe0dbe7db1a37932bd48fe": "967f1f11d0510d37af94155e5bb3b4e5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/2013916d00ec3e980156b219e9ef92568eaa6c": "6ff20fef434674510bae738654b4018c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/31/9b8edddb8ef4e6f06cfbf57421865db4ace6e1": "aec280bbf632d7ea051e2643921d114a",
".git/objects/91/58f5d3dbad7e8404a0686fbfab58d5743e04f1": "8ce2fb250a0d09d76a7b3c089fa412c6",
".git/objects/62/d661f0c4f036e344fc7557a85787964298a172": "6e9974508ef04bf3ce56856a88fe8e47",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/97f164d4a126e9cb80ba7ef0f0a179d9d636ea": "e2651a8a1bf284e9fe503d6183ace4ae",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/eefa769a021914feedd0eef7e531deb84640b2": "99605a5dfc0690a1f78ad4889e899c55",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/65c4d20b568f203277538447e774b7e0ef7990": "4d1bbf82875ecc94ca1863625e07179f",
".git/objects/ce/ff9e79f3daea7eff4667f3ae3bfb5fc0e1f75e": "077171f1fff034069a2dbd3dda53c3c3",
".git/objects/ce/c7bad083e64f4121546b7ae596a245af479181": "ee842bcaacef2dbfd41fea60d0d48d8b",
".git/objects/41/c001b2ce43a96752d77b783077444e4ee0fd0a": "1ed226870210eaba32c769d088ab87aa",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/646ae18963db1f58fbd4bb60cf486bcbab1811": "ccbf11c70893d848059039a4d68356dc",
".git/objects/23/48d0b8cb6619cb45437cf2968f12a07fe54964": "a3e58b70cec35b5a88810db6ef8d1f1e",
".git/objects/8d/42aeec45f98f328fffb6808eea4983c582adea": "12ce0d843ca9f60de152858b4b9de94a",
".git/objects/82/243fd7ad44827db8fe7dce592a8ae6cd9b6f96": "22dbdcff0c60022b48a6c7fb1524432c",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/9f685fbd9786eca6a09cf3afb7de7b1449d6c0": "165039c00e89c7b6783ce2d1d2344b84",
".git/objects/22/12cb7eadb86681cb83612d921fa03c257de3e1": "8f358869e11d17a55863684787e92ff2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fdb244f64605987c28f5dc5881412f8",
".git/logs/refs/heads/main": "3c9b70cef42def1ed7105079adf6eab6",
".git/logs/refs/remotes/origin/main": "97394f7c192d4281de292581379c9c61",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c3575e2e697facc6b5fe3f537898dc2a",
".git/refs/remotes/origin/main": "c3575e2e697facc6b5fe3f537898dc2a",
".git/index": "7d5751a091ad59e692a84479976bc976",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"assets/AssetManifest.json": "6e0870947ab45422d9fe40640406a9aa",
"assets/NOTICES": "46d11392253193ae4f7e20336b7fb1d2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "323a301ed699ee49b302ef183df2702c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "397d5b3f454a53a1c6df79aa807929cd",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/imgs/Collage%2520Chair%2520Render.jpg": "566ae471822df025642a19e17784fd05",
"assets/assets/imgs/Collage%2520Images%2520Mockup%25204.png": "3588062d2a965f0146eac423265a3953",
"assets/assets/imgs/2nd%2520page.png": "26a441655e97acd46a1857ece7d8dae1",
"assets/assets/imgs/3rd%2520page.png": "1fc38c95b95a0cd4925b7289b0e720dd",
"assets/assets/imgs/6th%2520page.png": "fdc140b222a924c58cbbf22aaf149c4e",
"assets/assets/imgs/chair-render-8.jpg": "445e655294b4368cecb6255adc1b6624",
"assets/assets/imgs/7th%2520page.png": "cf91844d8bd317c919218f90c62c1b2a",
"assets/assets/imgs/Collage%2520Images%2520with%2520Chair.jpg": "d1aa4dedb86fcc29d0d32053de81f215",
"assets/assets/imgs/chair-render-2.jpg": "731dd4bbcdf7386174dd118d641a5160",
"assets/assets/imgs/chair-render-1.jpg": "7af29d2cd8df58e2883a3b3fe3bc14d1",
"assets/assets/imgs/5th%2520page.png": "f49790b2f96d66df16512eaf4ef3f761",
"assets/assets/imgs/chair%2520render%25205.jpg": "35f35ddf6e4e0be8c6028617d5c26f19",
"assets/assets/imgs/4th%2520page.png": "272edd8394996f0223d80b59014f95ca",
"assets/assets/imgs/Collage%2520Images%2520Project%25203.jpg": "24b5a4d5f0b63717ca7e4a6d6534aa7c",
"assets/assets/imgs/noise_bg.jpg": "a0265b2fdf5d81e319e495a346ba163e",
"assets/assets/imgs/8th%2520page.png": "814b672e133f6adba2bcc84d1b13e268",
"assets/assets/imgs/1st%2520page.png": "a39c85be2d12b3e14e4186c23d88d623",
"assets/assets/lottie/arrow_down.json": "1a79abbfc2881a1481e941574a884afc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
