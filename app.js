const quizData = [
    {
        question: "How Old the Universe is ?",
        a: " 100 Years",
        b: " 500 Years",
        c: " 1000 Years",
        d: " millions Years",
        correct: "d"
    },
    {
        question: " Who is the President of Erangle ?",
        a: " lord M4",
        b: " Dr. AKM",
        c: " Mr.M16",
        d: " None of the above",
        correct: "a"

    },
    {
        question: "HTML stand for ",
        a: " Hypertext Markup Language",
        b: " Hydrabad Tamil Mumbai Lost",
        c: " give me  phone a friend option ",
        d: " no not possible here",
        correct: "a"

    },
    {
        question: "What is the most used programming language in 2019?",
        a: " javaScript ",
        b: " java ",
        c: " python",
        d: " c-objective",
        correct: "a"
    },
    {
        question: "In which year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]
const question = document.querySelector("h2");
// const label = document.querySelectorAll("label")
const a_option = document.querySelector("#a_option")
const b_option = document.querySelector("#b_option")
const c_option = document.querySelector("#c_option")
const d_option = document.querySelector("#d_option")
const button = document.querySelector("button")
const result = document.querySelector("#quiz")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselected()
    question.innerText = quizData[currentQuiz].question;
    a_option.innerText = quizData[currentQuiz].a
    b_option.innerText = quizData[currentQuiz].b
    c_option.innerText = quizData[currentQuiz].c
    d_option.innerText = quizData[currentQuiz].d

}


// to find which answer is selecting 

function getSelected() {
    let chooseOption = undefined;
    const answer = document.querySelectorAll(".answer");
    answer.forEach((val) => {
        if (val.checked) {
            chooseOption = val.id;
            console.log(chooseOption)
        }
    })
    return chooseOption;
}

// for automatically deselect option on every quiz load

function deselected() {
    const answer = document.querySelectorAll(".answer");
    answer.forEach((val) => {
        val.checked = false;
    })

}

button.addEventListener("click", () => {

    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            result.innerHTML = `
            <h2 class = "result">You answered correctly  ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `

        }

    }
}
)

