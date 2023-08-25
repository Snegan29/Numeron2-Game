// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional


const number1 = document.getElementById("number1")
const number2 = document.getElementById("number2")
const number3 = document.getElementById("number3")
// const timer = document.getElementById("timer")

let operation

function random(){
    return  Math.floor(Math.random()*99)+1
}

var num1 = random()
var num2 = random()
var num3 = update(num1,num2)

function display(){
    var num1 = random()
    var num2 = random()
    var num3 = update(num1,num2)
    number1.innerText = num1
    number2.innerText = num2
    number3.innerText = num3
}

display();



var operators = ['+','-','*','/','%']

function update(num1,num2) {
    var ans = 0
    var operators = ['+','-','*','/','%']
     operation = operators[Math.floor(Math.random()*5)]
        if(operation == '+'){
            ans = num1 + num2
        }else if(operation == '-'){
            ans = num1 - num2
        }else if(operation == '*'){
            ans = num1 * num2
        }else if(operation == '/'){
            ans = Math.floor(num1 / num2)
        }else if(operation == '%'){
            ans = num1 % num2
        }
        return ans
    }




const button = document.getElementById("buttons")
button.addEventListener('click', (e) => {
    check(e.target.id)
})

let score = 0    

function check(i){
    if(i == "plus" && operation == '+' ||  i == 'minus' && operation == '-' ||  i == 'mul' && operation == '*' ||  i == 'divide' && operation == '/' ||  i == 'modulus' && operation == '%'){
        timeLeft = 20
        score++;
        localStorage.setItem('score',score)
        display();
    }else {
        gameover()
    }
}

var stopWatch = document.getElementById("timer");5
var timeLeft = 20;

function updateTimer() {
    stopWatch.textContent = timeLeft;
    timeLeft--;cdffff

    if(timeLeft==0){
        gameover()
    }
}

setInterval(updateTimer, 1000)


function gameover(){
    location.href = "gameover.html"
}