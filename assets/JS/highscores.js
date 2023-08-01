// Displays all highscores from local storage
console.log(highScores)
for (var i = 0; i < highScores.length; i++) {
    const li = document.createElement("li");
    // creates a list item that displays users initials and score
    li.textContent = highScores[i].initials + ' - ' + highScores[i].score;
    // makes list items appear on screen
    highScoresList.appendChild(li);
}
