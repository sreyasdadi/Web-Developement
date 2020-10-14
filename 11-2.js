var secret=4;
var guess=prompt("Guess the number");
attempt=0;
if(guess==secret)
	alert("You got it in "+attempt+" attempts")
else
{
	attempt++;
	if(guess>secret){
		guess=prompt("Too high ... Guess Again");
	}
	else{
		guess=prompt("Too Low ... Guess Again");
	}
}