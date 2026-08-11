const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search");
const artisansSection = document.querySelector("#artisans");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.toLowerCase().trim();
    const artisans = artisansSection.querySelectorAll("article");

    if (searchTerm === "") {// View Profile buttons
const profileButtons = document.querySelectorAll(".contact-btn");

profileButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const artisanCard = button.closest(".artisan-card");
        const artisanName = artisanCard.querySelector("h3").textContent;
        const artisanJob = artisanCard.querySelector(".artisan-job").textContent;
        const artisanLocation = artisanCard.querySelector(".artisan-location").textContent;

        alert(
            "Artisan Profile\n\n" +
            artisanName + "\n" +
            artisanJob + "\n" +
            artisanLocation + "\n\n" +
            "This artisan is verified and available for service."
        );
    });
});
        artisans.forEach(function (artisan) {
            artisan.style.display = "block";
        });
        return;
    }

    artisans.forEach(function (artisan) {
        const artisanText = artisan.textContent.toLowerCase();

        if (artisanText.includes(searchTerm)) {
            artisan.style.display = "block";
        } else {
            artisan.style.display = "none";
        }
    });
});