// one-way
//self.onmessage = event => {
//    console.log(event.data)
//}


self.onmessage = event => {
    console.log(event.data)

    //two-way method 3
    self.clients.matchAll({includeUncontrolled: true, type: "window"})
        .then(clients => clients[0].postMessage("Definitely!!"))

    //two-way method 1
    if (event.ports[0]) event.ports[0].postMessage({say: "Yes!!!"})

}

//two-way method 2
const broadcast = new BroadcastChannel("id123")
broadcast.onmessage = event => {
    console.log(event.data)
    broadcast.postMessage("of course!!!")
}