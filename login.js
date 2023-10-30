function login() {
    const uname = document.getElementbyID("uname");
    localStorage.setItem("uname", uname);
    window.location.href = "budget.html";
}