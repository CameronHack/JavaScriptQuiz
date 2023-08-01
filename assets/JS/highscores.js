// Displays all highscores from local storage
console.log(highScores)
for (var i = 0; i < highScores.length; i++) {
    let li = document.createElement("li");
    li.textContent = highScores[i].initials + ' - ' + highScores[i].score;
    li.setAttribute("data-index", i);
    highScoresList.appendChild(li);
}
