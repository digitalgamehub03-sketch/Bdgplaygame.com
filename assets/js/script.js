/* ==========================================
   GameHub Pro Premium Script
   Part 1
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       BACK TO TOP BUTTON
    ========================== */

    const backToTop = document.createElement("div");

    backToTop.className = "back-to-top";

    backToTop.innerHTML = "↑";

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================
       FADE-UP ANIMATION
    ========================== */

    const elements = document.querySelectorAll(
        ".guide-card, .feature-card, .review-card, .stat-box"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("fade-up", "show");

            }

        });

    }, {
        threshold: 0.2
    });

    elements.forEach(el => {

        observer.observe(el);

    });

});/* ==========================================
   GameHub Pro Premium Script
   Part 2
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Newsletter Form
    ========================== */

    const newsletter = document.querySelector(".newsletter-form");

    if (newsletter) {

        newsletter.addEventListener("submit", function (e) {

            e.preventDefault();

            const email = this.querySelector("input").value.trim();

            if (email === "") {

                alert("Please enter your email address.");

                return;

            }

            alert("Thank you for subscribing!");

            this.reset();

        });

    }

    /* ==========================
       Button Click Effect
    ========================== */

    const buttons = document.querySelectorAll(
        ".primary-btn,.secondary-btn,.download-btn,.login-btn,.register-btn"
    );

    buttons.forEach(btn => {

        btn.addEventListener("click", function () {

            this.style.transform = "scale(0.96)";

            setTimeout(() => {

                this.style.transform = "";

            }, 150);

        });

    });

    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /* ==========================
       Current Year
    ========================== */

    const year = document.getElementById("current-year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
