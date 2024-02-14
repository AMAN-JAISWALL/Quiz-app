// console.log("Quiz App");
const questions = [
    {
        question : "which is the large animal in the world ?",
        answers : [
            {text : "shark" ,correct :false},
            {text : "Blue Whale" ,correct :true},
            {text : "Elephant" ,correct :false},
            {text : "Giraffe" ,correct :false},
        ]
    },

    {
        question : "Which built-in method combines the text of two strings and returns a new string?",
        answers : [
            {text : "append()" ,correct :false},
            {text : " concat()" ,correct :true},
            {text : "attach()" ,correct :false},
            {text : "None of the above" ,correct :false},
        ]
    },


    {
        question : "How do you declare a new date in JavaScript?",
        answers : [
            {text : "var date = Date();" ,correct :false},
            {text : "var date = date('now');" ,correct :false},
            {text : "var date = new Date();" ,correct :true},
            {text : "var date = date().current();" ,correct :false},
        ]
    },

    {
        question : "How do you get cookies in JavaScript?",
        answers : [
            {text : "window.cookies" ,correct :false},
            {text : "location.cookies" ,correct :false},
            {text : "document.cookie" ,correct :true},
            {text : "document.cookies" ,correct :false},
        ]
    },

    {
        question : "Which of the following does the pop() method do?",
        answers : [
            {text : "It increments the total length by 1" ,correct :false},
            {text : "It decrements the total length by 1" ,correct :true},
            {text : "It prints the first element but no effect on the length" ,correct :false},
            {text : "None of the above options" ,correct :false},
        ]
    }
];

const questionElement= document.querySelector("#question");
const ansButtons =document.querySelector("#ans-buttons"); 
const nextBtn = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextBtn.innerHTML = "Next";
        showQuestionAndAns()

}

function showQuestionAndAns(){
    reSetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " ."  + currentQuestion.question;

    //now i am writing code for answers
    currentQuestion.answers.forEach((ans)=>{
        let button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add('btn');
        ansButtons.appendChild(button);
        if(ans.correct){
            button.dataset.correct = ans.correct;
            // console.log(button);
        }
        button.addEventListener("click",selectAns)
    })


}

function reSetState(){
    nextBtn.style.display= "none";
    while(ansButtons.firstChild){
        ansButtons.removeChild(ansButtons.firstChild);
    }
}

function selectAns(e){
    //
    const selectBtn = e.target;
    // console.log(selectBtn.dataset);
    const isCorrect = selectBtn.dataset.correct;
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    // console.log("array method",Array.from(ansButtons.children));
    //for writing this code because after click ans then right ans colore can be green  
    Array.from(ansButtons.children).forEach((button)=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled= true;
    })
    nextBtn.style.display= "block";
    nextBtn.addEventListener("click",nextbtnFun)

}



function nextbtnFun(){
    console.log("next btn")
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestionAndAns();
    }else{
        reSetState();
        questionElement.innerHTML= `you scored ${score} out of ${questions.length}`;
        // nextBtn.innerHTML = "Play Again";
        // nextBtn.style.display = "block";
    }

    
}
startQuiz();