import { showToast } from "./toast.js"

export const Signup = (fullName, email, password) => {
  const newUser = {
    fullName,
    email,
    password,
  };

  // Get existing auth data
  const authData = JSON.parse(localStorage.getItem("authData")) || [];

  // Check for duplicate email
  const userExists = authData.some(user => user.email === email);
  if (userExists) {
    showToast("❌ User with this email already exists!");
    return;
  }

  // Save user
  authData.push(newUser);
  localStorage.setItem("authData", JSON.stringify(authData));

  showToast("✅ Signup successful! Redirecting...");

  setTimeout(() => {
    window.location.href = "/login.html";
  }, 1500);
};


export const Login = (email, password) => {
  const authData = JSON.parse(localStorage.getItem("authData")) || [];

  const user = authData.find(user => user.email === email);

  if (user) {
    if (password === user.password) {
      localStorage.setItem("LoggedInUser", JSON.stringify(user));
      showToast("✅ Login successful! Redirecting...");

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } else {
      showToast("❌ Incorrect password");
    }
  } else {
    showToast("User not found");
  }
};