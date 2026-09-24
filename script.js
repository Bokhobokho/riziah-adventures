// ==========================
// NAVBAR BACKGROUND ON SCROLL
// ==========================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY > 60
        );

    }

});


// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            topBtn.style.display = "flex";
            topBtn.style.justifyContent = "center";
            topBtn.style.alignItems = "center";

        } else {

            topBtn.style.display = "none";

        }

    });


    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================
// BOOKING FORM → WHATSAPP
// ==========================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // ==========================
        // GET FORM VALUES
        // ==========================

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const people =
            document.getElementById("people").value.trim();

        const adventure =
            document.getElementById("adventure").value;

        const travelDate =
            document.getElementById("travelDate").value;

        const message =
            document.getElementById("message").value.trim();


        // ==========================
        // VALIDATE TRAVEL DATE
        // ==========================

        const selectedDate = new Date(travelDate);

        const today = new Date();

        today.setHours(0, 0, 0, 0);


        if (selectedDate < today) {

            alert("Please select a future travel date.");

            return;

        }


        // ==========================
        // CREATE WHATSAPP MESSAGE
        // ==========================

        const whatsappMessage =
`Hello Riziah Adventures!

I would like to enquire about a tour.

Name: ${name}
Phone / WhatsApp: ${phone}
Email: ${email}
Number of People: ${people}
Adventure: ${adventure}
Preferred Travel Date: ${travelDate}

Message:
${message}`;


        // ==========================
        // RIZIAH ADVENTURES WHATSAPP
        // ==========================

        const whatsappNumber = "265998714441";


        // ==========================
        // CREATE WHATSAPP URL
        // ==========================

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        // ==========================
        // OPEN WHATSAPP
        // ==========================

        window.location.href = whatsappURL;

    });

}


// ==========================
// STATS COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;


function startCounters() {

    if (counterStarted) {

        return;

    }

    counterStarted = true;


    counters.forEach(counter => {

        const target =
            parseInt(
                counter.getAttribute("data-target")
            );

        const suffix =
            counter.getAttribute("data-suffix") || "";


        let current = 0;

        const duration = 2000;

        const increment =
            target / (duration / 16);


        function updateCounter() {

            current += increment;


            if (current < target) {

                counter.textContent =
                    Math.ceil(current) + suffix;

                requestAnimationFrame(updateCounter);

            } else {

                counter.textContent =
                    target + suffix;

            }

        }


        updateCounter();

    });

}


// ==========================
// DETECT WHEN STATS SECTION
// BECOMES VISIBLE
// ==========================

const statsSection =
    document.querySelector(".stats");


if (statsSection) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        startCounters();

                        observer.disconnect();

                    }

                });

            },
            {
                threshold: 0.4
            }
        );


    observer.observe(statsSection);

}