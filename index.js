const user = JSON.parse(localStorage.getItem("LoggedInUser"));
    
if (user) {
      document.getElementById("username").textContent = user.fullName;
} else  {
      window.location.href = "/login.html";
}

document.getElementById("LogoutButton").addEventListener("click", () => {
  localStorage.removeItem("LoggedInUser");
  window.location.href = "/login.html";
});