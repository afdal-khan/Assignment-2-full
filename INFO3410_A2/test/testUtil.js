let lib = require('./util.js');
const assert = require('assert');

const testFunctions = [testGenerateEven,testGetSize,testAddTo,testDequeue,testAddToObj,testSort,testFlatten].forEach(testFunc =>{testFunc.call();});

function testGenerateEven(){
   let n =10;
   let A= [2,4,6,8];
   let B= lib.generateEven(n);
   assert.deepEqual(A,B);

}

function testGetSize(){
    let words=["Ice","Cream", "is","life"];
    size=lib.getSize(words);
    assert.deepEqual(size,words.length);
}

function testAddTo(){
    //2. Adding to the back. Expected result is
    let a1=["aquaman","batman","catwoman"];
    let a2=["aquaman","batman","catwoman","deadpool"];
    result=lib.addTo(a1,"deadpool","back");
    assert.deepEqual(a2,result);

}

function testEnqueue(){
    //1. Adds to the end. Expected result is
let words=["Ice","Cream", "is","life."];
let ans=["Ice","Cream", "is","life.","Yes Dawg!"];
enq=lib.enqueue(words,"Yes Dawg!");
assert.deepEqual(ans,enq);
}

function testDequeue(){
  let words=["Ice","Cream", "is","life."];
  let ans=["Cream", "is","life."];
dq=lib.dequeue(words);
assert.deepEqual(ans,dq);  
}

function testAddToObj(){
    let Person={Fname:"Peter",
            Lname:"Parker",
            SuperheroName:"SpiderMan"
            };
    let ExP={Fname:"Peter",
            Lname:"Parker",
            SuperheroName:"SpiderMan",
            Age:"15"
            };

newObjAddition=lib.addToObj(Person,"Age","15");
assert.deepEqual(ExP,newObjAddition);
}

function testSort(){
    orig=["k","s","q","a","b"];
    exp=["a","b","k","q","s"];

    s= lib.sort(orig,"asc");
    assert.deepEqual(exp,s);
}

function testFlatten(){
    let Person={Fname:"Peter",
            Lname:"Parker",
            SuperheroName:"SpiderMan"
            };
    exp= '{"Fname":"Peter","Lname":"Parker","SuperheroName":"SpiderMan"}'
    e = lib.flatten(Person);
    assert.deepStrictEqual(exp,e);
}

