// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Fetch members from JSON and display them
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data, 'grid');
        });

    // Toggle view buttons
    const gridViewButton = document.getElementById('gridView');
    const listViewButton = document.getElementById('listView');
    const membersContainer = document.getElementById('members');

    gridViewButton.addEventListener('click', () => {
        membersContainer.classList.remove('list');
        membersContainer.classList.add('grid');
    });

    listViewButton.addEventListener('click', () => {
        membersContainer.classList.remove('grid');
        membersContainer.classList.add('list');
    });

    // Function to display members in the chosen view
    function displayMembers(members, view) {
        const container = document.getElementById('members');
        container.innerHTML = '';
        container.className = view;

        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.className = 'member';

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            `;

            container.appendChild(memberCard);
        });
    }

    // Footer auto-update for last modified
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent += document.lastModified;
});
