/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Principle 1: Window/Global Object Binding
        everything in your screen.
* 2. Principle 2: Implicit Binding
       calling the object before the dot.
       
* 3. Principle 3: New binding
       calling the parameter in the constructor.

* 4. Principle 4: Explicit binding
        'this' refer to the object in the .call() method.
     
*
* write out a code example of each explanation above
*/

// Principle 1:Window/Global Object Binding
console.log(this);
// code example for Window Binding

// Principle 2:Implicit Binding

// code example for Implicit Binding
const person ={
    name: "MH",
    age: 27,
    personalInfo:function(){
        console.log(`my name is ${this.name}, I am ${this.age}`)
    }
}
person.personalInfo();

// Principle 3:New binding

// code example for New Binding
function Friend(p){
    this.name = p.name;
    this.age = p.age;
    this.personalInfo=function(){
        console.log(`my friend is ${this.name}. She is ${this.age}`);
        
    }
}
const myFd = new Friend({name:"MH",age:27});
myFd.personalInfo();
// Principle 4: Explicit binding

// code example for Explicit Binding
function Family(){
    
    console.log(`my dad is ${this.name}. He is ${this.age}`);
    
}
const myDad ={
    name: "JH",
    age:57
}
const myCousin ={
    name: "SFL",
    age:17
}
Family.call(myDad);
Family.apply(myCousin);