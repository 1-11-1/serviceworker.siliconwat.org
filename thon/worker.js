self.oninstall = event => {
    self.clients.matchAll({includeUncontrolled: true, type: "window"})
        .then(clients => clients[0].postMessage(" 2) installing..."))

    event.waitUntil(
        self.caches.open("v1").then(cache => cache.addAll(["./index.html", "./app.html", "./sunflower.png", "./raindrop.png"]))
    )
}

self.onactivate = event => {
    self.clients.matchAll({includeUncontrolled: true, type: "window"})
        .then(clients => clients[0].postMessage(" 3) app is ready!"))
}

self.onfetch = event => {
    //console.log(event.request.url)
    const url = new URL(event.request.url)
    //console.log(url)

    if (url.pathname === "/thon/sunflower") {
        event.respondWith(self.caches.match("./sunflower.png"))
    }

    if (url.pathname === "/thon/raindrop") {
        event.respondWith(self.caches.match("./raindrop.png"))
    }

    if (url.pathname === "/thon/") {
        event.respondWith(self.caches.match("./index.html"))
    }

    if (url.pathname === "/thon/app.html") {
        event.respondWith(self.caches.match("./app.html"))
    }
}