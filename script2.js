const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

let cartCount = 0;

document.querySelectorAll(".add-cart").forEach(function (button) {
    button.addEventListener("click", function () {
        cartCount++;
        document.getElementById("cartCount").textContent = cartCount;

        const originalText = button.textContent;
        button.textContent = "Added ✓";
        button.style.backgroundColor = "#30245f";
        button.style.color = "white";

        setTimeout(function () {
            button.textContent = originalText;
            button.style.backgroundColor = "";
            button.style.color = "";
        }, 1000);
    });
});

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("newsletterEmail").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = document.getElementById("newsletterMessage");

    if (!emailPattern.test(email)) {
        message.style.color = "#d62828";
        message.textContent = "Please enter a valid email address.";
        return;
    }

    message.style.color = "#218838";
    message.textContent = "Thank you for subscribing!";
    newsletterForm.reset();
});