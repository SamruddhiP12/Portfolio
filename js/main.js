// =========================
// PORTFOLIO JAVASCRIPT
// =========================

// Navbar Active Link on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// =========================
// Fade In Animation
// =========================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

document.querySelectorAll(
    ".section, .project-card, .skill-card, .about-card"
).forEach((el) => {

    el.classList.add("hidden");
    observer.observe(el);

});

// =========================
// Typing Effect
// =========================

const subtitle = document.querySelector(".subtitle");

const text =
    "COMPUTER ENGINEERING STUDENT";

let index = 0;

function typeText() {

    if (!subtitle) return;

    subtitle.innerHTML = "";

    const typing = setInterval(() => {

        subtitle.innerHTML += text.charAt(index);

        index++;

        if (index >= text.length) {

            clearInterval(typing);

        }

    }, 70);

}

window.addEventListener("load", typeText);

// =========================
// Contact Form Validation
// =========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const inputs =
            form.querySelectorAll("input");

        const name = inputs[0].value.trim();
        const email = inputs[1].value.trim();

        const message =
            form.querySelector("textarea")
                .value
                .trim();

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            alert(
                "Please fill all fields."
            );

            return;

        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (
            !emailPattern.test(email)
        ) {

            alert(
                "Please enter a valid email."
            );

            return;

        }

        alert(
            "Thank you! Your message has been submitted."
        );

        form.reset();

    });

}

// =========================
// Scroll To Top Button
// =========================

const scrollBtn =
    document.createElement("button");

scrollBtn.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

scrollBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:linear-gradient(135deg,#ff6b81,#c77dff);
color:white;
font-size:18px;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 0 20px rgba(255,107,129,.4);
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// Console Message
// =========================

console.log(
    "Samruddhi Portfolio Loaded Successfully 🚀"
);