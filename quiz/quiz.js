const questionGenerator = (questionText,answers) => {
    let question = {
        questionText: questionText,
        answers: answers,
    }
    return question;
}

var questions = new Map();
questions.set(1,questionGenerator("What is the capital city of Turkey?",
                ["Istanbul","Ankara","İzmir","Bursa"]));
            
questions.set(2,questionGenerator("How many types of flamingo are there?",
                ["3","4","5","6"]));
                
questions.set(3,questionGenerator("Which big cat can run the fastest?",
                ["Lion","Tiger","Leopard","Cheetah"]));
                
questions.set(4,questionGenerator("Who was the first actor to play James Bond?",
                ["George Lazenby","Sean Connery","Roger Moore","Timothy Dalton"]));
                
questions.set(5,questionGenerator("How many Ice Age films have there been?",
                ["2","3","4","6"]));

var correctAnswers = new Map();
correctAnswers.set("q1","Ankara");
correctAnswers.set("q2","6");
correctAnswers.set("q3","Cheetah");
correctAnswers.set("q4","Sean Connery");
correctAnswers.set("q5","6");

var questionString = ["a","b","c","d"];

function shuffle(array) {
    var ctr = array.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
    }
    return array;
}
var questionOrder = shuffle([1,2,3,4,5]);
var currentPageIndex = 0;

function initPage(){
    document.getElementById("questionNumber").innerHTML = "Question Number: "+(currentPageIndex+1).toString()+ " of 5"; 
    var currentQuestion = questions.get(questionOrder[currentPageIndex]);
    document.getElementById("question").innerHTML = currentQuestion.questionText;
    var i;
    for (i = 1; i < 5; i++) {
        document.getElementById("answer_"+i.toString()).innerHTML = currentQuestion.answers[i-1];
    }
    var questionAnswer = localStorage.getItem("q"+questionOrder[currentPageIndex].toString())
    if( questionAnswer != null){
        document.getElementById(questionAnswer).checked = true;
    }
    else{
        for (i = 1; i < 5; i++) {
            document.getElementById("answer"+i.toString()).checked= false;
        }
    }
} 
initPage()
document.getElementById("prev-btn").disabled = true;
function nextFunction() {
    const rbs = document.querySelectorAll('input[name="answer"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb;
            break;
        }
    }
    if(selectedValue != null){
        localStorage.setItem("q"+questionOrder[currentPageIndex].toString(),selectedValue.id);
    }
    if( currentPageIndex == 4){
        var correctNumber = 0;
        var i;
        for (i = 1; i < 6; i++) {
            if(localStorage.getItem("q"+i.toString()) == null){
                localStorage.removeItem("q"+i.toString());
                continue;
            }
            var localValue = questions.get(i).answers[parseInt(localStorage.getItem("q"+i.toString()).slice(-1))-1];
            console.log(localValue);
            if(localValue === correctAnswers.get("q"+i.toString())) {
                correctNumber+=1;
            }
            localStorage.removeItem("q"+i.toString());
        }
        localStorage.setItem("Correct",correctNumber);
        updateUser();
        alert("Test is Finished!");
        location.href ="results.html";
        // document.getElementById("next-btn").action = "mainPage.html";
    }
    else {
        if(currentPageIndex == 3 ){
            document.getElementById("next-btn").innerHTML = "Finish Test";
        }
        else if ( currentPageIndex == 0){
            document.getElementById("prev-btn").disabled = false;
        }
        currentPageIndex+=1;
        initPage();
    }
}
function prevFunction() {
    if (currentPageIndex == 1 ){
        document.getElementById("prev-btn").disabled = true;
    }
    if ( currentPageIndex == 4){
        document.getElementById("next-btn").innerHTML = "Next Question";
    }
    if(currentPageIndex > 0){
        currentPageIndex-=1;
        initPage();
    }
}
function updateUser() {
    var counter = localStorage.getItem("currentUser")
    var obj = localStorage.getItem("user"+counter)
    obj = JSON.parse(obj)
    obj.score.push(localStorage.getItem("Correct") / questions.size * 100);
    obj = JSON.stringify(obj)
    localStorage.setItem("user"+counter.toString(), obj)
    localStorage.removeItem("Correct")
}
