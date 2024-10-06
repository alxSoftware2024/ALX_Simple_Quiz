const byname=document.querySelectorAll("input[name='quiz']");
//console.log(byname);
//const userAnswer=document.querySelector("input[name='quiz']:checked").value;
//console.log(userAnswer);
const feedback=document.getElementById('feedback');
const submitanswer=document.getElementById('submit-answer');
function checkAnswer() {
    const correctAnswer='4';
    var ele = document.getElementsByName('quiz');

    for(i = 0; i < ele.length; i++) {
      const  userAnswer=ele[i].value;
       //if(ele[i].checked)
       //{
        if(userAnswer === correctAnswer)
        {
            feedback.textContent="Correct! Well done.";
        }
        if(userAnswer!==correctAnswer)
        {
            feedback.textContent="That's incorrect. Try again!";
        }
      // }
    }
  
}
submitanswer.addEventListener('click',checkAnswer);