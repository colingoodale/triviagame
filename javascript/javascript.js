var questions = [
    {
        question: "What is the capital of Illinois?",
        options: ["Chicago", "Peoria", "Springfield", "Dekalb"],
        answer: 2,
    },
    {
        question: "How many states are there in the United States of America?",
        options: ["51", "52", "48", "50"],
        answer: 3,
    },
    {
        question: "Who is the main character of Harry Potter?",
        options: ["Hermione", "Harry", "Ron", "Ginny"],
        answer: 1,
    },
    {
        question: "What does a HuffleUpAGuss resemble?",
        options: ["Adulthood", "Elephants", "A Rumple and A Rample", "All of the Above"],
        answer: 3,
    }
]
//choose random object from array
//var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
// create start function
var gotQuestion = false;

//create function to choose quesiton with onclick event.
function chooseQuestion() {
    var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
    console.log(chosenQuestion);
}

chooseQuestion();




