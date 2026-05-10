

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        // Validation
        if (name === "" || email === "" || password === "") {
            alert("All fields are required!");
            return;
        }

        if (!email.endsWith("@azhar.adu.eg")) {
            alert("Email must end with @azhar.adu.eg");
            return;
        }

        if (password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        // ✅ هنا النجاح → ينقلك لأول صفحة
        window.location.href = "skills.html";
    });
    

});