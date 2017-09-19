
$(document).ready(function(){
    
    $("#8ballAnswerSide").hide();
    var magic8Ball = {
        listOfAnswers: ["No","Yes","I don't think so...","Of course!","Indubitably","In your dreams."]
    }

    magic8Ball.askQuestion = function(question) {
        var answer = this.listOfAnswers[Math.floor(Math.random() * this.listOfAnswers.length)];
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        $("#8ball").effect("shake");
        $("#answer").text(answer).fadeIn(4000);
    }

    var onClick = function() {
        $("#answer").hide();
        $("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
        setTimeout( function() {
            var question = prompt("Ask a YES/NO question");
            magic8Ball.askQuestion(question);},
            500);
    }

    $("#questionButton").click(onClick);
});