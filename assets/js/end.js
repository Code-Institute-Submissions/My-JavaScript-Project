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

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};

//local storage
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores);