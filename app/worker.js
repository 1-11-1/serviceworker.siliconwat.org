self.addEventListener("install", event => {
    // sw cannot control clients yet

    /*event.waitUntil(
        clients.get(event.clientId)
        .then(client => {
            client.postMessage({message: "Downloading complete. Now app v1 is now installing..."})
        })
    )*/
})

self.addEventListener("activate", event => {
    console.log(event.clientId)
    event.waitUntil(clients.claim());  // if you want the app to work right after installing without needing to refreh/open the app
    // sw cannot control clients yet

    /*console.log(self.clients)
    self.clients.get(event.clientId)
        .then(client => {
            client.postMessage({message: "Finished istalling! You can now use the app offline!"})
        })*/
})

self.addEventListener("fetch", event => {
    console.log("hi")
    /*console.log(self.clients)
    self.clients.get(event.clientId)
        .then(client => {
            client.postMessage({message: "Welcome!! to my app"})
        })*/
})