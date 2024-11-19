<script>
const counterElement = document.getElementById("counter");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const messagesDiv = document.getElementById("messages");

let counter = 0;

function updateCounter() {
  counterElement.textContent = counter;

  // Disable the decrement button if counter is 0
  decrementButton.disabled = counter === 0;

  // Show "Free Shipping" message when counter reaches 10, remove if not 10 or 20
  if (counter === 10) {
    addMessage("You have free shipping");
  } else if (counter === 9 || counter === 20) {
    removeMessage("You have free shipping");
  }

  // Change increment button background to red at counter 20 and add "Out of Stock" message
  if (counter === 20) {
    incrementButton.classList.add("red-background");
    addMessage("Out of stock");
  } else {
    incrementButton.classList.remove("red-background");
    removeMessage("Out of stock");
  }
}

function addMessage(messageText) {
  if (!messagesDiv.querySelector(`span[data-message="${messageText}"]`)) {
    const messageSpan = document.createElement("span");
    messageSpan.textContent = messageText;
    messageSpan.dataset.message = messageText;
    messageSpan.style.display = "block";
    messagesDiv.appendChild(messageSpan);
  }
}

function removeMessage(messageText) {
  const messageSpan = messagesDiv.querySelector(`span[data-message="${messageText}"]`);
  if (messageSpan) {
    messagesDiv.removeChild(messageSpan);
  }
}

incrementButton.addEventListener("click", () => {
  if (counter < 20) {
    counter++;
    updateCounter();
  }
});

decrementButton.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    updateCounter();
  }
});

// Initialize the counter
updateCounter();