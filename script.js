/* =========================================
   ARTISAN FINDER NIGERIA
   JavaScript
   ========================================= */

// Artisan data
const artisans = [
    {
        name: "Emeka Electrical Services",
        profession: "Electrician",
        location: "Abuja",
        rating: 4.9,
        phone: "08000000001"
    },
    {
        name: "Musa Plumbing Solutions",
        profession: "Plumber",
        location: "Kano",
        rating: 4.8,
        phone: "08000000002"
    },
    {
        name: "Chinedu Auto Repairs",
        profession: "Mechanic",
        location: "Lagos",
        rating: 4.7,
        phone: "08000000003"
    },
    {
        name: "Aisha Interior Designs",
        profession: "Interior Designer",
        location: "Kaduna",
        rating: 4.9,
        phone: "08000000004"
    },
    {
        name: "Ibrahim Carpentry Works",
        profession: "Carpenter",
        location: "Katsina",
        rating: 4.8,
        phone: "08000000005"
    },
    {
        name: "David Painting Services",
        profession: "Painter",
        location: "Port Harcourt",
        rating: 4.6,
        phone: "08000000006"
    }
];

/* =========================================
   SEARCH FUNCTION
   ========================================= */

function searchArtisans() {
    const searchInput = document.querySelector(
        '.search-box input'
    );

    const locationSelect = document.querySelector(
        '.search-box select'
    );

    if (!searchInput) {
        return;
    }

    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

    const selectedLocation = locationSelect
        ? locationSelect.value.toLowerCase()
        : "";

    const results = artisans.filter(artisan => {

        const matchesSearch =
            artisan.name.toLowerCase().includes(searchTerm) ||
            artisan.profession.toLowerCase().includes(searchTerm) ||
            artisan.location.toLowerCase().includes(searchTerm);

        const matchesLocation =
            !selectedLocation ||
            selectedLocation === "all" ||
            artisan.location.toLowerCase() === selectedLocation;

        return matchesSearch && matchesLocation;
    });

    displayResults(results);
}

/* =========================================
   DISPLAY SEARCH RESULTS
   ========================================= */

function displayResults(results) {

    const grid = document.querySelector('.artisan-grid');

    if (!grid) {
        return;
    }

    if (results.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <h3>No artisans found</h3>
                <p>
                    Try another service or location.
                </p>
            </div>
        `;
        return;
    }

    grid.innerHTML = results.map(artisan => `
        <article class="artisan-card">

            <div class="artisan-info">

                <h3>${artisan.name}</h3>

                <p>
                    ${artisan.profession}
                </p>

                <p class="location">
                    📍 ${artisan.location}
                </p>

                <p class="rating">
                    ⭐ ${artisan.rating}
                </p>

                <a
                    class="btn btn-primary"
                    href="tel:${artisan.phone}"
                >
                    Contact Artisan
                </a>

            </div>

        </article>
    `).join('');
}

/* =========================================
   SEARCH BUTTON
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const searchButton = document.querySelector(
        '.search-box button'
    );

    const searchInput = document.querySelector(
        '.search-box input'
    );

    if (searchButton) {
        searchButton.addEventListener(
            "click",
            searchArtisans
        );
    }

    if (searchInput) {
        searchInput.addEventListener(
            "keypress",
            function(event) {

                if (event.key === "Enter") {
                    searchArtisans();
                }

            }
        );
    }

    // Display all artisans when the page loads
    displayResults(artisans);
});

/* =========================================
   SIMPLE MOBILE NAVIGATION
   ========================================= */

const navLinks = document.querySelectorAll(
    "nav a"
);

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});

/* =========================================
   CONSOLE MESSAGE
   ========================================= */

console.log(
    "Artisan Finder Nigeria loaded successfully."
);