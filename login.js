function login() {
    const name1 = document.querySelector("#name");
    localStorage.setItem("uname", name1.value);
    window.location.href = "budget.html";
}