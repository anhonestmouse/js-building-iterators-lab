function mySome(arr, callback){
	var x=false;
	for(var i = 0; i<arr.length; ++i){
		if(callback(arr[i], i, arr)){
			x = true;
		}
	}
	return x;
}
