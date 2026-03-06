function updateMessage() {

    const message = document.getElementById("message");

    const now = new Date();

    message.innerText =
        "Updated from JavaScript at: " + now.toLocaleTimeString();

}
