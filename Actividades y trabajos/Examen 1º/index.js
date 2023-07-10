
const form = document.getElementById(`player-form`);
const playerList = document.getElementById(`player-list`);

form.addEventListener(`submit`, function(event) {
    event.preventDefault();

    const nameInput = document.getElementById(`name`);
    const autosInput = document.getElementById(`autos`);

    const name = nameInput.value;
    const autos = autosInput.value;

    const playerItem = document.createElement(`li`);
    playerItem.innerHTML = `
            <strong>${name}</strong> (${autos})
            <button class="delete-button btn btn-primary"">X</button>
    `;

    const deleteButton = playerItem.querySelector(`.delete-button`);
    deleteButton.addEventListener(`click`, function() {
        playerItem.remove();
    });

    playerList.appendChild(playerItem);

    nameInput.value = '';
    autosInput.value = '';
});