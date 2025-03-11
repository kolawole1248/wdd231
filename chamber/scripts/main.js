// script.js

document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;

    // Fetch member data from JSON file
    fetch('data/members.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const memberList = document.getElementById('member-list');
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.classList.add('member-card');
                memberCard.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}">Visit Website</a>
                `;
                memberList.appendChild(memberCard);
            });
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

    // Toggle between grid view and list view
    const toggleViewButton = document.getElementById('toggle-view');
    toggleViewButton.addEventListener('click', () => {
        const memberList = document.getElementById('member-list');
        if (memberList.classList.contains('grid-view')) {
            memberList.classList.remove('grid-view');
            memberList.classList.add('list-view');
        } else {
            memberList.classList.remove('list-view');
            memberList.classList.add('grid-view');
        }
    });

    // Dark/Light mode toggle
    const toggleModeButton = document.getElementById('toggle-mode');
    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
