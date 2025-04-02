document.addEventListener("DOMContentLoaded", () => {
    fetch("data/discover.json")
        .then(response => response.json())
        .then(data => {
            const discoverGrid = document.querySelector(".discover-grid");

            data.forEach(item => {
                const card = document.createElement("div");
                card.className = "discover-card";
                card.innerHTML = `
                    <h2>${item.name}</h2>
                    <figure>
                        <img src="${item.image}" alt="${item.name}">
                    </figure>
                    <address>${item.address}</address>
                    <p>${item.description}</p>
                    <a href="${item.link}" class="learn-more">Learn More</a>
                `;
                discoverGrid.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading items:", error));

    // Visitor localStorage
    const visitMessage = document.getElementById("visit-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const currentTime = Date.now();

    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentTime - lastVisit) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? "day" : "days"} ago.`;
        }
    }

    localStorage.setItem("lastVisit", currentTime);
});
