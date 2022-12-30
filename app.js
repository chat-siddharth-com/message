const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-input');
const messagesContainer = document.querySelector('#messages');

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the message from the input
  const message = messageInput.value;

  // Create a new message element
  const messageElement = document.createElement('div');
  messageElement.innerHTML = message;

  // Add the message to the messages container
  messagesContainer.appendChild(messageElement);

  // Clear the message input
  messageInput.value = '';
});

