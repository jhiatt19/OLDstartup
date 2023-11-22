function login() {
    const uname = document.getElementbyID("uname");
    localStorage.setItem("uname", uname.value);
    window.location.href = "budget.html";
}