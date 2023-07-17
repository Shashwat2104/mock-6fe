const form = document.getElementById("register_form");
console.log(form);
const usernameInput = document.getElementById("username");

const emailInput = document.getElementById("email");

const BaseServerUrl = `https://mock06-v9kb.onrender.com`;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(`${BaseServerUrl}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usernameInput.value,
      email: emailInput.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("Login Sucessful");
      window.location.href = "./dashboard.html";
    });
});
