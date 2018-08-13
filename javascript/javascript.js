var questions = [
    {
        question: "What is the capital of Illinois?",
        options: ["Chicago", "Peoria", "Springfield", "Dekalb"],
        answer: "a2",
    },
    {
        question: "How many states are there in the United States of America?",
        options: ["51", "52", "48", "50"],
        answer: "a3",
    },
    {
        question: "Who is the main character of Harry Potter?",
        options: ["Hermione", "Harry", "Ron", "Ginny"],
        answer: "a1",
    },
    {
        question: "What does a HuffleUpAGuss resemble?",
        options: ["Adulthood", "Elephants", "A Rumple and A Rample", "All of the Above"],
        answer: "a3",
    },
    {
        question: "What statue was gifted to the United States by the French?",
        options: ["Eiphel Tower", "Statue of Liberty", "Tower of Babble", "Trump Mar-A-Lago"],
        anwer: "a1",
    },
    {
        question: "Wherfore art Thou?",
        options: ["to the East", "to the West", "to the South", "to the North"],
        answer: "a2",
    },
    {
        question: "How difficult is this assignment?",
        options: ["frustratin", "simple", "promising", "Ooga La Boonga"],
        answer: "a3",
    },
    {
        question: "How Many Rankles are in a Ruffle?",
        options: ["45", "32", "54", "85"],
        answer: "a2",
    },
    {
        question: "The American Falls and Horseshoe Falls are better known as?",
        options: ["Space Falles", "Niagra Falls", "French Falls", "Rocky Falls"],
        answer: "a1",
    },
    {
        question: "Who was at 17 Burton Street, London on April 21,1926?",
        options: ["Queen Elizabeth II", "Mary Queen of Scotts", "QUeen Elizabeth IV", "Beyonce!!"],
        answer: "a0",
    }
]
//choose random object from array
//var chosenQuestion = questions[Math.floor(Math.random() * questions.length)];
// create start function
var gotQuestion = false;
var playerScore = 0;

function run() {
    clearInterval(time);
    time = 120;
    setInterval(decrement, 1000);
}

function decrement() {
    time--;
    $("#timer").text(time);
    if (time === 0) {
        stop();
        alert("You got " + playerScore + "! " + "You did GREAT!");
    }

    function stop() {
        clearInterval(time);
    }

}

//create function to choose quesiton with onclick event.
//moved to onClick






