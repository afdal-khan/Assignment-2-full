// let lib = require('./merger').merger;
// const assert = require('assert');
module = require('js/merger');

var first_names = ["aaron","tom","brock","gyallis","rick"];
var last_names = ["rodgers","brady","lesnar","banton","ross"];




console.log('merge2Single Test Cases');
function test_merge2single(arr1, arr2, answer){

    let res = module.merge2Single(arr1, arr2);
   if(res.toString() === answer.toString()){
        console.log("YOU PASS!!!:) \n your output: ", res);
    
    }
    else console.log("NOPE :( \n your output  ", res,);
}
test_merge2single(first_names, last_names, ['aaron rodgers','tom brady','brock lesnar','gyallis banton','rick ross']); 



console.log('merge2Object Test Cases ');
function test_merge2object(arr1, arr2, answer){
    
    let res = module.merge2Object(arr1, arr2);
    if(res.toString() === answer.toString()){
        console.log("YOU PASS THE TEST!!!!! \n your output ", res);
        
    }
    else console.log("NOPE:( \noutput received: ", res);
}
test_merge2object(first_names, last_names, [{firstname:'aaron',lastname:'rodgers'},{firstname:'tom',lastname:'brady'},
{firstname:'brock',lastname:'lesnar'},{ firstname:'gyallis',lastname:'banton'},{firstname:'rick',lastname:'ross'}]); 







