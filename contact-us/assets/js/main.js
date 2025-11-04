const form = document.querySelector("form");
const messageSent = document.querySelector(".massage-sent");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  document
    .querySelectorAll(".error")
    .forEach((span) => (span.style.display = "none"));
  document
    .querySelectorAll("input, textarea")
    .forEach((el) => (el.style.border = "1px solid hsl(186, 15%, 59%)"));

  const textInputs = document.querySelectorAll('input[type="text"]');
  textInputs.forEach((input) => {
    const errorSpan = input.nextElementSibling;
    if (input.hasAttribute("isrequired") && input.value.trim() === "") {
      errorSpan.style.display = "block";
      input.style.border = "1px solid rgb(217, 58, 58)";
      hasError = true;
    } else if (input.value.trim().length > 0 && input.value.trim().length < 3) {
      errorSpan.textContent = "Minimum 3 characters required.";
      errorSpan.style.display = "block";
      input.style.border = "1px solid rgb(217, 58, 58)";
      hasError = true;
    }
  });

  const emailInput = document.getElementById("email");
  const emailError = emailInput.nextElementSibling;
  if (emailInput.value.trim() === "") {
    emailError.textContent = "This field is required.";
    emailInput.style.border = "1px solid rgb(217, 58, 58)";
    hasError = true;
  }

  const message = document.getElementById("message");
  const messageError = message.nextElementSibling;
  if (message.value.trim() === "") {
    messageError.style.display = "block";
    message.style.border = "1px solid rgb(217, 58, 58)";
    hasError = true;
  } else if (message.value.trim().length < 3) {
    messageError.textContent = "Minimum 3 characters required.";
    messageError.style.display = "block";
    message.style.border = "1px solid rgb(217, 58, 58)";
    hasError = true;
  }

  const consent = document.getElementById("consent");
  const consentError = consent.nextElementSibling.nextElementSibling;
  if (!consent.checked) {
    consentError.style.display = "block";
    hasError = true;
  }

  if (!hasError) {
    messageSent.style.top = "20px";
    messageSent.style.transition = "all 0.5s ease-in-out";

    setTimeout(() => {
      messageSent.style.top = "-400px";
    }, 2000);

    form.reset();
  }
});



var form2 = "";

$("#input-generator").on("submit", (e) => {
  e.preventDefault();

  let newname = document.getElementById("input-name").value.trim();

  let target = document.getElementById("aria-inputs");

  const div = document.createElement("div");
  div.className = "form-group";

  const lbl = document.createElement("label");
  lbl.textContent = newname;
  lbl.className = "mt-2"
 
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.type = "button";
  removeBtn.className = "btn btn-danger mb-2 float-end";
  

  removeBtn.addEventListener("click", () => {
    div.remove();
  });

  const input = document.createElement("input");
  input.type = "text";
  input.name = newname;
  input.id = newname;
  input.className = "form-control my-2";

  div.append(lbl);
  div.append(removeBtn);
  div.append(input);

  target.append(div);
  document.getElementById("input-name").value = "";
});







