// Do these 10 assignments, after each task is correctly completed
// create a git commit so that you can record your progress.


// Task 1
// Write a function that takes two strings and returns 
// a new string which is the concatenation of both strings

let conjoin = function (twin1, twin2) {
	let togethr = twin1 + twin2;
	return togthr
};


let foo = {f1:'124', ggggg:568, uyuyi:[7, 9, 0]}


// Task 2
// Write a function that takes no arguments and gives back 
// a JavaScript object with the fields foo, bar. Each field
// can have any value

let task = function() {
	let obj = {foo:'elemenopee', bar:'queares'};
	return obj;
};

let gout = function() {
	let leg = {foo:'ouch', bar:'nogood'};
	return leg
};


// Task 3 
// Write a function that takes three arguments and 
// returns a JavaScript	object with whatever field names 
// you want, as long as the three field names use the three arguments
// given to the function

let azn = function(arg1, arg2, arg3) {
	let beard = {fu:'arg1', man:'arg2', chu:'arg3'};
	return beard
};





// Task 4
// Write a function that takes an array of integers as
// its argument and return the sum of the integers



let hm = function(ar) {
	let sum = 0;
	for (let i = 0; i < ar.length; i++) {
		let compact = ar[i];
		sum += compact;
	} return sum;
};




















let launder = function(int1) { 
	let running_sum = 0;
//start from running sum in the beginning position

	for (let i = 0; i < int1.length; i++) {
//for this integer that is equal to 0, 
//keep going while its length is less than the 
//length of the array (array represented by int1);
//do this for i = 1, + 1, + 1 etc.,... 

		let bee = int1[i];
//whatever given value of i in array int1 
//will be called bee
		running_sum += bee;
//in other words, 
//running_sum(0) = running_sum(0) + bee(w/e position);
//here, we are mutating the variable 'running_sum'
	};

	return running_sum;
//give back the mutated variable
}









//Task 4.5, write a function that takes 
// two arrays, and returns the sum of each array 
// combined
// Example: [1, 2, 3] and [5, 7, 8] should return
// 26


let two = function(arr1, arr2) {
	if (arr1.length !== arr2.length)
		return null;
	let start = 0;
	for (let D = 0; D < arr1.length; D++) {
		let first = arr1[D];
		let second = arr2[D];
		start += first + second;
	};
	return start
};

//close
//for start([1, 2, 3], [1, 2, 3]), returned 
//'01, 2, 31, 2, 3'

//closer...? 
//for start([1, 2, 3], [1, 2, 3]), returned 
//'011'



// Task 5
// Write a function that takes an array of strings and
// returns all the strings in the array as one long string.

let tsk5 = function(arrstring) {
	let concat = '';
	for (let x = 0; x < arrstring.length; x++){
		let place = arrstring[x];
		concat += place;
	};
	return concat;
};



// Task 6
// Write a function that takes an array and 
// a function. Then for each item in the array, 
// call the function with the item as an argument

let herp = function(arr, fun) {
	for (let x = 0; x < arr.length; x++) {
		fun(arr[x]);
	};
}

let herp = function(arr, fun) {
	for (let x = arr.length; x >= 0; x--) {
		fun(arr[x]);
	};
}

callbacks
indexing
for-loops
block scoping



//create 3 functions which use all concepts


let lobo = function(arr, arr1, fun) {
			
	for (let w = 0; w < arr.length; w++) {
		if (arr.length > arr1.length){
			fun(arr[w]);
	}  else {
		fun(arr1[w]);
	}
	};
};



let gato = function(stringa, stringb) {
	let kitty = 0;
	// let cat = stringa + stringb;
	for (let k = 0; k < (stringa + stringb).length; k++) {
		let chat = (stringa + stringb).length[k];
		kitty += chat;
	} 
	return kitty;
}






//if (arr.length === arr1.length);
//		return null;

/*

lobo([1, 3, 4, 5], [2 , 3, 5], function(any) {console.log(any)})

lobo([1, 3, 4], [2, 3, 5, 6], function(any) {console.log(any)})

*/


// Task 6
// Task 7
// Task 8
// Task 9
// Task 10