function mySome(arr, callback){
	var x=true;
	for(var i = 0; i<arr.length; ++i){
		if(!callback(arr[i], i, arr)){
			x = false;
		}
	}
	return x;
}
