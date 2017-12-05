// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

//  CODE INSIDE HERE   //
// 	let x =arr[0];
// 	if(arguments.length > 2){
// 		x = arguments[2];
// 		for(let i = 0; i<arr.length;++i){
// 			x = callback(x,arr[i],i,arr);
// 		}
// 	} else {
// 		for(let i = 1; i<arr.length;++i){
// 			x = callback(x,arr[i],i,arr);
// 		}
// 	}
// 	return x;
// }
let x = arr[0]
let i = 1;
if(arguments.length>2){
	x=arguments[2];
	i=0;
}
for(i;i<arr.length;++i){
	x = callback(x,arr[i],i,arr);
}
return x;
}
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
