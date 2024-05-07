function toggleChat() {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.style.display =
    chatWindow.style.display == "none" ? "block" : "none";
}

function sendMessage() {
  console.log("hit");
  const inputElement = document.getElementById("message-input");
  const message = inputElement.value;
  console.log(message, "message");

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://poppilan.com/api/sendMessage", true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("message sent succesfuly");
    } else {
      console.error("some error occurred");
    }
  };

  xhr.onerror = function () {
    console.log("again another error");
  };

  xhr.send(JSON.stringify({ message }));
  console.log(message, "message");

  if (message.trim() !== "") {
    const chatContent = document.getElementById("chat-content");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatContent.appendChild(messageElement);
    inputElement.value = "";
  }
}

document.addEventListener("click", function (event) {
  const chatWindow = document.getElementById("chat-window");
  const chatWidget = document.getElementById("chat-widget");

  if (
    !chatWindow.contains(event.target) &&
    !chatWidget.contains(event.target)
  ) {
    // Clicked outside of both chat window and chat widget
    chatWindow.style.display = "none";
  }
});
