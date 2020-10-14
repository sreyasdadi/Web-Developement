var result=[];
var input="welcome";
while(input!="quit"){
	if(input=="new"){
		result.push(prompt("Please enter the todo task!"));
		console.log("Successfuly added the todo")
	}
	else if(input=="list"){
		if(result.length!=0)
			result.forEach(function(res,i){
			console.log(i+"-"+res);
		})
		else
			console.log("list is empty");
	}
	else if(input=="delete"){
		result.splice(prompt("Please enter the index of the todo to delete"),1);
		console.log("Successfuly deleted the todo")

	}
	else if(input=="welcome"){
		console.log("Welcome to to the todo application");
	}
	else{
		console.log("Invalid Input!");
	}
	input=prompt("What do you want to do?");
}
console.log("OK, YOU QUIT THE APP");