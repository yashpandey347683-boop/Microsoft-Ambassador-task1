function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}

function showMessage(technology) {

    alert(
        "You selected: " +
        technology +
        "\n\nMore information about this technology coming soon!"
    );

}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;

    }


    alert(
        "Thank you, " +
        name +
        "!\n\nYour message has been received."
    );

    contactForm.reset();

});

const counters =
    document.querySelectorAll(".counter");


counters.forEach(function(counter) {

    const target =
        Number(counter.getAttribute("data-target"));

    let current = 0;

    const increment =
        target / 100;


    const updateCounter = function() {

        current += increment;


        if (current < target) {

            counter.innerText =
                Math.ceil(current);

            setTimeout(
                updateCounter,
                20
            );

        } else {

            counter.innerText =
                target + "+";

        }

    };


    updateCounter();

});
