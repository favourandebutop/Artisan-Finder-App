const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#search");
const artisansSection = document.querySelector("#artisans");

// =========================================
// ARTISAN SEARCH
// =========================================

if (searchForm && searchInput && artisansSection) {
    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const searchTerm = searchInput.value.toLowerCase().trim();
        const artisans = artisansSection.querySelectorAll(".artisan-card");

        artisans.forEach(function (artisan) {
            const artisanText = artisan.textContent.toLowerCase();

            if (searchTerm === "" || artisanText.includes(searchTerm)) {
                artisan.style.display = "flex";
            } else {
                artisan.style.display = "none";
            }
        });
    });
}


// =========================================
// VIEW PROFILE BUTTONS
// =========================================

const profileButtons = document.querySelectorAll(".contact-btn");

profileButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const artisanCard = button.closest(".artisan-card");

        if (!artisanCard) {
            return;
        }

        const artisanName = artisanCard.querySelector("h3").textContent;
        const artisanJob = artisanCard.querySelector(".artisan-job").textContent;
        const artisanLocation = artisanCard.querySelector(".artisan-location").textContent;
        const artisanRating = artisanCard.querySelector(".artisan-rating").textContent;

        alert(
            "ARTISAN PROFILE\n\n" +
            artisanName + "\n\n" +
            artisanJob + "\n" +
            artisanLocation + "\n" +
            artisanRating + "\n\n" +
            "✓ Verified Professional\n\n" +
            "This artisan is available for service."
        );

    });

});