// Djigit Tau CRM — авторизация

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

    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    // Проверка заполнения
    if (phoneValue === "" || passwordValue === "") {
        if (error) {
            error.textContent = "Введите номер телефона и пароль";
            error.style.display = "block";
        }
        return;
    }

    // Сохраняем пользователя
    localStorage.setItem("crm_logged_in", "true");
    localStorage.setItem("crm_phone", phoneValue);

    if (error) {
        error.style.display = "none";
    }

    loginScreen.style.display = "none";
    dashboard.style.display = "block";

    // Показываем номер пользователя
    const userPhone = document.getElementById("userPhone");
    if (userPhone) {
        userPhone.textContent = phoneValue;
    }
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


// Проверяем авторизацию при открытии CRM
document.addEventListener("DOMContentLoaded", function () {
    const loginScreen = document.getElementById("login");
    const dashboard = document.getElementById("dashboard");
    const userPhone = document.getElementById("userPhone");

    const loggedIn = localStorage.getItem("crm_logged_in");
    const savedPhone = localStorage.getItem("crm_phone");

    if (loggedIn === "true") {
        if (loginScreen) {
            loginScreen.style.display = "none";
        }

        if (dashboard) {
            dashboard.style.display = "block";
        }

        if (userPhone && savedPhone) {
            userPhone.textContent = savedPhone;
        }
    } else {
        if (loginScreen) {
            loginScreen.style.display = "flex";
        }

        if (dashboard) {
            dashboard.style.display = "none";
        }
    }
});
