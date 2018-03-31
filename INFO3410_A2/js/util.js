//let myexports= module.export()={};

function generateEven(n){
	if(isNaN(n)=== true){
		console.log("You entered a letter. Try a number instead");
		throw new Error("You entered a letter. Try a number instead");
	}
	let EvenA=[];
	for (i =1; i<n;i++){
		if(i%2===0)
			EvenA.push(i);		
	}
	return EvenA;
}

module.exports.generateEven= generateEven;

function getSize( ArrOrObj){ //getting the count of the attributes in a Array or Object
 	//checks the index of arrays and the attributes of objects the same way
	 let count=0;
	 for (pos in ArrOrObj){ //for every attribute inside the ArrOrObj inr count
		 count++;
	 }
	 return count;
}
module.exports.getSize= getSize;

function addTo(Array,num,position){
	if (position.localeCompare("front")===0)
		Array.unshift(num);
	else if (position.localeCompare("back")===0)
		Array.push(num);
	else {
		console.log("Invalid Keyword entered. Your value will not be added.")
		throw new Error("Invalid Keyword entered. Your value will not be added.");		
	}
	return Array;
}
module.exports.addTo=addTo;

function enqueue(Array, val){
	Array.push(val); // Adds new elements to the end of an array, and returns the new length
	return Array;
 }
module.exports.enqueue=enqueue;


function dequeue(Array){
	Array.shift(); // Removes the first element of an array, and returns that element
	return Array; //returns new array after deletion
}
module.exports.dequeue=dequeue;

function addToObj( Obj, index, val){
Obj[index]= val;
return Obj;
}
module.exports.addToObj=addToObj;

function sort(Array,sortype){
	
	if(sortype.localeCompare("desc")===0){
		Array.sort(); //asc
		Array.reverse(); //get in desc order
	}
	else if (sortype.localeCompare("asc")===0){
		Array.sort(); //asc
	}
	else {
		console.log("Invalid Keyword entered. Your array will not be sorted.");
	    throw new Error("Invalid Keyword entered. Your value will not be sorted.");	
	}
	return Array;
}
module.exports.sort= sort;

function flatten(obj){
	//console.log(JSON.stringify(Person))
	return JSON.stringify(obj);
}
module.exports.flatten= flatten;


//______________________________________________________________