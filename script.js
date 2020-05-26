var questionPrompt = document.getElementById('question');
var timer = document.getElementById('countdown');

var startPage= document.querySelector('.startPage');
var questionsPage= document.querySelector('.questionsPage');
var resultsPage= document.querySelector('.resultsPage');
var scoreboard = document.querySelector(".scoreboard");
var response = document.querySelector('ol');
var scoreDisplay = document.querySelector('#score');
var submitScore = document.querySelector('#submitScore')
var restartButton = document.querySelector('#restart');

var timeLeft = 75;
var score =0;

function setScore() {
  scoreDisplay.textContent = 'Score: '+score;
}

function startTimer() {
  startPage.style.display = "none";
  questionsPage.style.display= 'block';

  

  var timeInterval = setInterval(function() {
    timer.textContent = "Time: " + timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timer.textContent = "";
      questionsPage.style.display='none';
      resultsPage.style.display='block';
      document.querySelector('#finalScore').textContent = score;
      clearInterval(timeInterval);
    }

  }, 1000);

}

var questions = [
    {
      title: "The condition in an if/else statement is enclosed within ____.",
      choices: ["A. Quotes", "B. Curly Brackets", "C. Parentheses", "D. Square Brackets"],
      answer: "A"
    },
    {
      title: "What is NOT one of the capitals of South Africa?",
      choices: ["A. Pretoria", "B. Cape Town", "C. Blomenfontain", "D. Johannesburg"],
      answer: "D"
    },
    {
      title: "Which movie won the Academy Award for Best Picture in 1993?",
      choices: ["A. The Fugitive", "B. Silence of the Lambs", "C. Schindler's List", "D. Unforgiven"],
      answer: "C"
    },
    {
      title: "What is the boiling point of water in fahrenheit?",
      choices: ["A. 244°F", "B. 315°F", "C. 205°F", "D. 211°F"],
      answer: "D"
    },
    {
      title: "Which river is the longest in the World?",
      choices: ["A. The Mississippi", "B. The Nile", "C. The Amazon", "D. The Yangtze"],
      answer: "B"
    }
    
  ];

var ans1 = document.getElementById('ans1');
var ans2 = document.getElementById('ans2');
var ans3 = document.getElementById('ans3');
var ans4 = document.getElementById('ans4');


response.addEventListener('click',function(){
    questionPrompt.textContent = questions[1].title;
    ans1.textContent = questions[1].choices[0];
    ans2.textContent = questions[1].choices[1];
    ans3.textContent = questions[1].choices[2];
    ans4.textContent = questions[1].choices[3];
    
response.addEventListener('click',function(){
    document.getElementById('ans3').setAttribute( "onClick", "wrong()" );
    document.getElementById('ans4').setAttribute( "onClick", "correct()" );
    questionPrompt.textContent = questions[2].title;
    ans1.textContent = questions[2].choices[0];
    ans2.textContent = questions[2].choices[1];
    ans3.textContent = questions[2].choices[2];
    ans4.textContent = questions[2].choices[3];

response.addEventListener('click',function(){
    document.getElementById('ans4').setAttribute( "onClick", "wrong()" );
    document.getElementById('ans3').setAttribute( "onClick", "correct()" );
    questionPrompt.textContent = questions[3].title;
    ans1.textContent = questions[3].choices[0];
    ans2.textContent = questions[3].choices[1];
    ans3.textContent = questions[3].choices[2];
    ans4.textContent = questions[3].choices[3];

response.addEventListener('click',function(){
    document.getElementById('ans1').setAttribute( "onClick", "wrong()" );
    document.getElementById('ans2').setAttribute( "onClick", "correct()" );
    questionPrompt.textContent = questions[4].title;
    ans1.textContent = questions[4].choices[0];
    ans2.textContent = questions[4].choices[1];
    ans3.textContent = questions[4].choices[2];
    ans4.textContent = questions[4].choices[3];  
          
response.addEventListener('click',function(){
    document.querySelector('#complete').textContent = 'Complete!';
    document.querySelector('#finalScore').textContent = score;
    questionsPage.style.display='none';
    resultsPage.style.display='block';
          })
        })        
      })
    })
})


function correct(){
  score++
  setScore()
}

function wrong(){
  timeLeft--
  timeLeft--
  timeLeft--
  timeLeft--
}

submitScore.addEventListener('click', function(event){
  event.preventDefault();
  timeLeft = 0;
  resultsPage.style.display='none';
  scoreboard.style.display='block';
  restartButton.style.display='block';
  var storedScore = document.createElement("p");
  storedScore.textContent = "Initials: " + document.getElementById("scoreInitials").value + " | Score: " + score;
  document.querySelector(".scoreboard").appendChild(storedScore);
  
})

restartButton.addEventListener('click', function(){
  location.reload();
})