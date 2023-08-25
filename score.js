// Iteration 8: Making scoreboard functional

const scoreboard = document.getElementById("score-board")
scoreboard.innerText = localStorage.getItem("score")

const again = document.getElementById("play-again-button")

again.addEventListener('click', function(){
    localStorage.removeItem('score')
    localStorage.setItem('score',0)
    window.location.href = "index.html"
})