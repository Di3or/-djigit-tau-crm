function login() {
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");
  const error = document.getElementById("error");
  const loginScreen = document.getElementById("login");
  const dashboard = document.getElementById("dashboard");

  if (!phone || !password || !loginScreen || !dashboard) {
    console.error("Не найдены элементы CRM");
    return;
  }

  if (phone.value.trim() === "" || password.value.trim() === "") {
    if (error) {
      error.textContent = "Введите номер телефона и пароль";
      error.style.display = "block";
    }
    return;
  }

  if (error) {
    error.style.display = "none";
  }

  localStorage.setItem("crm_logged_in", "true");
  localStorage.setItem("crm_phone", phone.value.trim());

  loginScreen.style.display = "none";
  dashboard.style.display = "block";
}

function logout() {
  const loginScreen = document.getElementById("login");
  const dashboard = document.getElementById("dashboard");
  const phone = document.getElementById("phone");
  const password = document.getElementById("password");

  localStorage.removeItem("crm_logged_in");
  localStorage.removeItem("crm_phone");

  if (dashboard) {
    dashboard.style.display = "none";
  }

  if (loginScreen) {
    loginScreen.style.display = "flex";
  }

  if (phone) {
    phone.value = "";
  }

  if (password) {
    password.value = "";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const loginScreen = document.getElementById("login");
  const dashboard = document.getElementById("dashboard");

  const loggedIn = localStorage.getItem("crm_logged_in");

  if (loggedIn === "true") {
    if (loginScreen) {
      loginScreen.style.display = "none";
    }

    if (dashboard) {
      dashboard.style.display = "block";
    }
  } else {
    if (dashboard) {
      dashboard.style.display = "none";
    }

    if (loginScreen) {
      loginScreen.style.display = "flex";
    }
  }
});
