import { Socket } from './socket.js';
import { App } from './app.js';

document.addEventListener("DOMContentLoaded", function() {
    let app = new App();
    app.start_listner("message");

    setTimeout(() => {
        console.log("Stopping listener");
        app.stop_listener("message");
    }, 10000);nod
});
