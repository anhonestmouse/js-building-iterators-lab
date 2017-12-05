function myFilter(arr, callback){
var myArray = [];
	for(let i = 0; i<arr.length; ++i){
		if(callback(arr[i],i,arr)){
			myArray.push(arr[i]);
		}
	}
	return myArray;
}