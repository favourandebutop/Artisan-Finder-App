/* =================================
   ARTISAN FINDER NIGERIA
   Main JavaScript
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("search");
    const artisanCards = document.querySelectorAll(".artisan-card");


    /* ==============================
       Artisan Search
    ============================== */

    if (searchForm) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchTerm = searchInput.value.trim().toLowerCase();

            if (searchTerm === "") {
                showMessage("Please enter a service to search for.");
                return;
            }

            let found = false;

            artisanCards.forEach(function (card) {

                const cardText = card.textContent.toLowerCase();

                if (cardText.includes(searchTerm)) {
                    card.style.display = "block";
                    found = true;
                } else {
                    card.style.display = "none";
                }

            });


            if (found) {

                document.getElementById("artisans").scrollIntoView({
                    behavior: "smooth"
                });

                showMessage(
                    "Artisans matching \"" + searchTerm + "\" found."
                );

            } else {

                artisanCards.forEach(function (card) {
                    card.style.display = "block";
                });

                showMessage(
                    "No artisan found for \"" +
                    searchTerm +
                    "\". Try electrician, plumber, carpenter or mechanic."
                );
            }

        });

    }


    /* ==============================
       Popular Search Links
    ============================== */

    const popularLinks =
        document.querySelectorAll(".popular-searches a");

    popularLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const service =
                this.textContent.trim();

            searchInput.value = service;

        });

    });


    /* ==============================
       View Profile Buttons
    ============================== */

    const profileButtons =
        document.querySelectorAll(".artisan-bottom button");

    profileButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const artisanCard =
                this.closest(".artisan-card");

            const artisanName =
                artisanCard.querySelector("h3").textContent;

            showMessage(
                "Profile for " +
                artisanName +
                " will be available soon."
            );

        });

    });


    /* ==============================
       Message Notification
    ============================== */

    function showMessage(message) {

        const oldMessage =
            document.querySelector(".site-message");

        if (oldMessage) {
            oldMessage.remove();
        }

        const messageBox =
            document.createElement("div");

        messageBox.className = "site-message";

        messageBox.textContent = message;

        document.body.appendChild(messageBox);


        setTimeout(function () {

            messageBox.classList.add("show");

        }, 10);


        setTimeout(function () {

            messageBox.classList.remove("show");

            setTimeout(function () {
                messageBox.remove();
            }, 300);

        }, 3500);

    }


    /* ==============================
       Smooth Navigation
    ============================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});