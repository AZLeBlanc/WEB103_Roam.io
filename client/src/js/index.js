async function loadDestinations() {
    const response = await fetch("/destinations");
    const destinations = await response.json();

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

loadDestinations();
