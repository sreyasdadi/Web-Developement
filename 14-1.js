function printReverse(array){
	for(var i=array.length-1;i>=0;i--){
		console.log(array[i]);
	}
}
function isUniform(array){
	var i;
	if(array.length!=0)
		i=array[0];
	else
		return false;
	for(var j=0;j<array.length;j++){
		if(array[j]!=i)
			return false;
	}
	return true;
}
function sumArray(array){
	var sum=0;
	for(var i=array.length-1;i>=0;i--){
			sum+=array[i];
	}
	console.log(sum);

}
function max(array){
	var max=0;
	for(var i=array.length-1;i>=0;i--){
		if(max<array[i])
			max=array[i];
	}
	console.log(max);

}