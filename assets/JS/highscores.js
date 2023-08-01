// Displays all highscores from local storage
for (var i = 0; i < highScores.length; i++) {
    const li = document.createElement("li");
    // creates a list item that displays users initials and score
    li.textContent = highScores[i].initials + ' ~ ' + highScores[i].score;
    // makes list items appear on screen
    highScoresList.appendChild(li);
}



// extra feature that I thought was necessary

const clearData = document.querySelector('#clearData')

// listener for the CLEAR DATA button
clearData.addEventListener('click', function (e) {
    if (e.target.matches('button')) {
        // prompts user to confirm their choice to clear data
        let clearScores = prompt('❗️ Warning this will clear all your previous submissions ❗️ Please type YES to continue');
        if (clearScores === 'YES') {
            // clears local storage
            localStorage.clear()
            window.alert("✅ CLEAR DATA SUCCESSFUL ✅")
            // reloads the page
            location.reload()
        } else {
            window.alert("❌ FAILED ❌ please type YES");
        }
    }
})