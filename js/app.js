//Add Event Listeners
const ui = document.getElementById("contact-us-form");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
document.getElementById("contactus").addEventListener("submit", submitForm);

function submitForm(e) {
  if (validateFields() === false) {
    e.preventDefault();
    return;
  }
}

function validateFields() {
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    email.value === "" ||
    message.value === ""
  ) {
    showAlert("Please Enter All Fields!!!", "error");
    window.scrollTo(0, 0);
    return false;
  } else {
    showAlert("Thank You for your Inquiry! We will respond ASAP", "success");
    window.scrollTo(0, 0);
    return true;
  }
}

function showAlert(message, className) {
  console.log(ui);
  const div = document.createElement("div");

  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  console.log(div);

  // Get Element you want to insert Alert At
  const form = document.querySelector("#contactus");

  //Get Parent Element
  const parentElement = form.parentElement;

  parentElement.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector(".alert").remove();
  }, 3000);
}
