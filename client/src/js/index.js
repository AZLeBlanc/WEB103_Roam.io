let allDestinations = [];

function renderDestinations(destinations) {
    const main = document.querySelector("main");

    const destHTML = destinations.map(destination => `
        <a href="/destination/${destination.id}">
            <article>
                <header>
                    <h5>${destination.name}</h5>
                </header>
                <img src="${destination.imageurl}" alt="${destination.name}" />
                <footer>
                    <p>${destination.country}, ${destination.continent}</p>
                </footer>
            </article>
        </a>
    `).join("");

    main.innerHTML = `<div class="card-grid">${destHTML}</div>`;
}

async function loadDestinations() {
    const response = await fetch("/destinations");
    allDestinations = await response.json();
    renderDestinations(allDestinations);
}

document.querySelector("#search").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    renderDestinations(allDestinations.filter(destination =>
        destination.name.toLowerCase().includes(term) ||
        destination.country.toLowerCase().includes(term) ||
        destination.continent.toLowerCase().includes(term)
    ));
});

loadDestinations();
