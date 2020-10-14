
function isEven(num){
	if(num%2==0){
		return true;
	}
	else{
		return false;
	}	
}
function factorial(num){
	var result=1;
	for(
		var i=1;
		i <= num; 
		i++)
	{
		result=result*i;
	}
	return result;
}
function kebabToSnake(res){
	var result="";
	for(var i=0;i<res.length;i++){
		if(res[i]=="-")
			result=result+"_";
		else
			result=result+res[i];
	}
	return result;
}

