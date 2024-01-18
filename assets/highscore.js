let scoresBtn = document.querySelector("#view-scoreboard");

//This is to rank the score in order by retrieving the scores from the localStorage.
function printHighscores(){
    let highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highscores.sort(function(a, b){
        return b.score - a.score;
    });
    highscores.forEach(function(score){
        let liTag = document.createElement("li");
        liTag.textContent = score.name + " - " + score.score;
        let olEl = document.getElementById("highscores");
        if(olEl){
            olEl.appendChild(liTag);
        }
    });
}

//Clears previous scores when users click clear scores.

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}

let clearBtn = document.getElementById("clear-btn");
if(clearBtn){
    clearBtn.onclick = clearHighscores;
}

printHighscores();
