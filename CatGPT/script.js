// Answer combinations
let answers = ["meaw", "mew", "meeaw", "meeeaw"]

// Link some elements
let inputBox = document.querySelector("#ask-here")
let qusAnsDiv = document.querySelector(".qus-ans")
let sendBtn = document.querySelector("#submit")


// Call submit function when send button is clicked or enter key is pressed
sendBtn.addEventListener("click", submit)

document.addEventListener("keypress", k=>{
    if(k.key === "Enter"){
        submit();
    }
})

// Variabls for answer
let i = 0
let answer = ""

// SUbmit function

function submit(){
    let question = inputBox.value.toString();

    if(question != ""){
        let questionDiv = document.createElement("div")
        let answerDiv = document.createElement("div")

        questionDiv.innerHTML = `<div class="question"><div class="logo"><img src="image/user-logo.jpg"></div><span class="text">${question}</span></div>`
        answerDiv.innerHTML = `<div class="answer"><div class="logo"><img src="image/cat-logo.png"></div><span class="text"></span></div>`

        qusAnsDiv.appendChild(questionDiv)
        qusAnsDiv.appendChild(answerDiv)

        i = Math.floor(Math.random()*2+2);
        answer = "Meaw"

        interval = setInterval(displayAnswer,400);

        answerDiv.scrollIntoView()
    }
    
    inputBox.value = ""
}

function displayAnswer() {
    let text = document.querySelectorAll(".text")
    text[text.length-1].innerHTML = answer + " !"
    answer = answer + " " + answers[Math.floor(Math.random()*4)]

    if(i > 0) i--;
    else clearInterval(interval);
}

let theme = "dark"
function changeTheme(){
    if(theme === "dark"){
        theme = "light"
        document.querySelector("body").id = "light"
        document.querySelector("#change-theme").innerHTML = "<i class=\"fa-solid fa-moon\"></i>"
    }
    else{
        theme = "dark"
        document.querySelector("body").id = ""
        document.querySelector("#change-theme").innerHTML = "<i class=\"fa-solid fa-sun\"></i>"
    }
}
