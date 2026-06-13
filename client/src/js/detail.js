async function loadDetails(id = window.location.pathname.split("/").pop()) {
    const response = await fetch(`/destinations/${id}`);
    const destination = await response.json();

    const main = document.querySelector("main");
    const header = document.querySelector("header");

    header.innerHTML = `
        <nav>
            <ul>
                <li><a href="/" role="button" class="secondary">← Back</a></li>
            </ul>
            <ul>
                <li><strong>${destination.name}, ${destination.country}</strong></li>
            </ul>
            <ul></ul>
        </nav>
    `;

    main.innerHTML = `
        <article>
            <img src="${destination.imageurl}" alt="${destination.name}" class="detail-img" />
            <p>${destination.description}</p>
            <footer>
                <ul class="tags">
                    <li>Climate: ${destination.climate}</li>
                    <li>Visit: ${destination.besttimetovisit}</li>
                    <li>Country: ${destination.country}</li>
                    <li>Continent: ${destination.continent}</li>
                </ul>
            </footer>
        </article>
    `;
}

loadDetails();
