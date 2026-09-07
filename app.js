function login() {
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (!phone || !password) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";

  document.getElementById("login").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
}

function logout() {
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("login").style.display = "flex";

  document.getElementById("phone").value = "";
  document.getElementById("password").value = "";
}
