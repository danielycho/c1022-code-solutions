var contactForm = document.querySelector('#contact-form');

// function handleSubmit(event) {
//   event.preventDefault();
//   var name = contactForm.elements.name.value;
//   var email = contactForm.elements.email.value;
//   var message = contactForm.elements.message.value;
//   var messageData = {
//     name,
//     email,
//     message
//   };
//   console.log(messageData);
//   contactForm.reset();
// }

contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var messageData = {};
  messageData.name = contactForm.elements.name.value;
  messageData.email = contactForm.elements.email.value;
  messageData.message = contactForm.elements.message.value;
  console.log(messageData);
  contactForm.reset();
}

// alternative way to do this.
