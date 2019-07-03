(function() {
    var Question = function(quesNumber, question, options, answer) {
        this.quesNumber = quesNumber;
        this.question = question;
        this.options = options;
        this.answer = answer;

    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var a = 0; a < this.options.length; a++) {
            console.log(a + ": " + this.options[a]);
        }
    }
    Question.prototype.displayResult = function(ans,callback) {
            var sc;
            if (ans === this.answer) {
                console.log("Correct Answer!");
                sc=callback(true);
               
            } else {
                console.log("Wrong Answer. Try again :)")
                sc=callback(false);
            }
            this.displayScore(sc)
        
        


    }
    Question.prototype.displayScore=function(score){
    	console.log("Current Score : "+score);
    	console.log("--------------------------------");
    }

    var q1 = new Question("0", "Do you Love Code in Js ?", ["No", "Yes"], 1);
    var q2 = new Question("1", "Who is the creator of Js ?", ["Branden Eich", "Denis Ritche", "Mohit"], 2);

    var questions = [q1, q2];
    function score(){
    	var sc=0;
    	return function(correct){
    		if(correct){
    			sc++;
    		}
    		console.log("sc>>>",sc)
    		return sc;

    	}
    }
    var keepScore=score();
    var randomQuestion = function() {
        var c = Math.floor(Math.random() * 2);
        questions[c].displayQuestion();
        var ans = prompt("Please select the correct answer(just type the number)");
        
        if (ans !== "exit") {
        	questions[c].displayResult(parseInt(ans),keepScore);
            randomQuestion(questions);
           
        }
    }
    randomQuestion(questions);






})();