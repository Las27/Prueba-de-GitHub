
const form = document.getElementById('player-form');
const playerList = document.getElementById('player-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const positionInput = document.getElementById('position');

    const name = nameInput.value;
    const age = ageInput.value;
    const position = positionInput.value;

    const playerItem = document.createElement('li');
    playerItem.innerHTML = `
        <strong>${name}</strong> (${age} años) - ${position}
        <button class="delete-button btn btn-primary"">X</button>
    `;

    const deleteButton = playerItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        playerItem.remove();
    });

    playerList.appendChild(playerItem);

    nameInput.value = '';
    ageInput.value = '';
    positionInput.value = '';
});