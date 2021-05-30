const hello = () => {
    const message = document.createElement("h2");
    message.innerText = "Hello, I'm just trying my first repository";
    const content = document.querySelector(".click-button");
    content.appendChild(message);
}

document.getElementById("hello").addEventListener('click',hello);