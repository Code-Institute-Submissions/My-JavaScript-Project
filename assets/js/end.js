//Constants
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
//Event Listener
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

//Save high score function
saveHighScore = (e) => {
    e.preventDefault();
};