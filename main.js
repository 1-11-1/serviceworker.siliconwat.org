//console.log("hello world")
//console.log(navigator)
//console.log(navigator.serviceWorker)
//console.log("serviceWorker" in navigator) => looks at parent
//console.log(navigator.hasOwnProperty("serviceWorker")) => does not look at parent

//const worker = navigator.serviceWorker.register("./worker.js")
//worker.then(registration => console.log(registration.scope, "hi"), error => console.log(error.message, "hi"))

// best practice for mobile users with slow internet
window.onload = () => {
    // http://...com/image.png
    const worker = navigator.serviceWorker.register("./worker1.js")
    worker.then(registration => console.log(registration.scope))
    .catch(error => console.log(error.message))

    // http://...com/services1/image.png
    const worker2 = navigator.serviceWorker.register("./services1/worker2.js")
    worker.then(registration => console.log(registration.scope))
    .catch(error => console.log(error.message))

    // http://...com/services1/services2/iamge.png
}