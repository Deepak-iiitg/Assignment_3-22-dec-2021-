var arr = [];
var a = parseInt(prompt());
var b = parseInt(prompt());
var c = parseInt(prompt());

arr.push(a);
arr.push(b);
arr.push(c);

var max = arr[0];
var len = arr.length;

for(var i=0; i<(arr.length); i++){
	if(max<arr[i]){
		max = arr[i];
	}
}
console.log("maximum value = "+max);
