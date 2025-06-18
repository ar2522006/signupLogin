import { Login } from "./lib.js";

const user = JSON.parse(localStorage.getItem("LoggedInUser"));
    
if (user) {
      window.location.href = "/";
}

const form = document.getElementById("LoginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent form from refreshing page

  const formData = new FormData(form);

  const email = formData.get("email");
  const password = formData.get("password");

  Login(email, password);
});
