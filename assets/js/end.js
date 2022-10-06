//Constants
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//update score text
finalScore.innerText = mostRecentScore;

//Event Listener
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

//Save high score function
saveHighScore = (e) => {
    e.preventDefault();
};

//local storage
localStorage.setItem('highScores', JSON.stringify([]));
console.log(JSON.parse(localStorage.getItem('highScores')));