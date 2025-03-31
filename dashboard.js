document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.getElementById("toggle-btn");
    const sidebar = document.querySelector(".sidebar");
    const mainContent = document.querySelector(".main-content");

    toggleBtn.addEventListener("click", function() {
        if (sidebar.style.left === "-250px") {
            sidebar.style.left = "0";
            mainContent.style.marginLeft = "250px";
        } else {
            sidebar.style.left = "-250px";
            mainContent.style.marginLeft = "0";
        }
    });
});
