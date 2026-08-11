const searchForm = document.querySelector("form");
const searchInput = document.querySelector("#search");
const artisansSection = document.querySelector("#artisans");

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const searchTerm = searchInput.value.toLowerCase().trim();
    const artisans = artisansSection.querySelectorAll("article");

    if (searchTerm === "") {
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